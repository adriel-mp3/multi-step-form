import React from "react";

import { Link } from "react-router-dom";

import { FormContext } from "@/context/FormContext";

import { Header } from "@/components/Form/Header/index";
import { GoBack } from "@/components/Form/Button/GoBack/index";

import { prices, adds } from "./helper/summary";

import styles from "./styles.module.css";

export const Summary = () => {
  const { selectedPlan, period, addOns } = React.useContext(FormContext);

  function calculateTotal() {
    const planTotal = prices[period][selectedPlan];
    const addOnsTotal = addOns
      .map((addOn) => adds[period][addOn])
      .reduce((a, b) => a + b, 0);
    return planTotal + addOnsTotal;
  }
  calculateTotal();
  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <div>
        <Header
          title="Finishing up"
          paragraph="Double-check everything looks OK before confirming."
        />
        <div className={styles.summary}>
          <div className={styles.summaryHeader}>
            <div>
              <h3>
                {selectedPlan} ({period})
              </h3>
              <Link to="/select-plan">Change</Link>
            </div>
            <span>{`$${prices[period][selectedPlan]}/${
              period === "monthly" ? "mo" : "yr"
            }`}</span>
          </div>
          <div className={styles.summaryBody}>
            {addOns
              ? addOns.map((addOn) => (
                  <p key={addOn} className={styles.addon}>
                    {addOn}
                    <span>{`$${adds[period][addOn]}/${
                      period === "monthly" ? "mo" : "yr"
                    }`}</span>
                  </p>
                ))
              : null}
          </div>
          <p className={styles.total}>
            Total (per {period === "monthly" ? "month" : "year"})
            <span>{`+$${calculateTotal()}/${
              period === "monthly" ? "mo" : "yr"
            }`}</span>
          </p>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <Link to="/select-plan">
          <GoBack />
        </Link>
        <Link to="/thank-you">
          <button className={styles.button}>Confirm</button>
        </Link>
      </div>
    </div>
  );
};
