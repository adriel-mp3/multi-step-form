import React from "react";

import { useNavigate } from "react-router-dom";

import { FormContext } from "@/context/FormContext";

import { Header } from "@/components/Form/Header";
import { NextStep } from "@/components/Button/NextStep/index";
import { GoBack } from "@/components/Button/GoBack/index";
import { Switch } from "@/components/Switch";
import { RadioGroup } from "@/components/Form/RadioGroup";

import styles from "./styles.module.css";
import { planOptions } from "./helper/plansOptions";

export const SelectPlan = () => {
  const { period, setPeriod } = React.useContext(FormContext);

  function toggleSwitch(value: boolean) {
    if (value) {
      return setPeriod("yearly");
    }
    setPeriod("monthly");
  }

  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form>
        <Header
          title="Select your plan"
          paragraph="You have the optiow of monthly or yearly billing."
        />
        <div className={styles.radioWrapper}>
          <RadioGroup options={planOptions} />
        </div>
        <div className={styles.switcherWrapper}>
          <span
            className={period === "monthly" ? `${styles.periodActive}` : ""}
          >
            Monthly
          </span>
          <Switch
            id="plansSwitch"
            label="Select Your Plan"
            hideLabel={true}
            onCheckedChange={toggleSwitch}
            value={period}
          />
          <span className={period === "yearly" ? `${styles.periodActive}` : ""}>
            Yearly
          </span>
        </div>
      </form>
      <div className={styles.buttonsWrapper}>
        <GoBack onClick={() => navigate("/")} />
        <NextStep onClick={() => navigate("/add-ons")} />
      </div>
    </div>
  );
};
