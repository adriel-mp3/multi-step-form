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
  const { selectedPlan, setSelectedPlan, period } =
    React.useContext(FormContext);
  const navigate = useNavigate();

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
          <Switch label="Plans" hideLabel={true} />
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
