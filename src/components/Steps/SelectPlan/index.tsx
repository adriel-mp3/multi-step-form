import React from "react";

import { useNavigate } from "react-router-dom";

import { FormContext } from "@/context/FormContext";

import { Header } from "@/components/Form/Header";
import { Switch } from "@/components/Form/Switch";
import { RadioGroup } from "@/components/Form/RadioGroup";
import { Button } from "@/components/Button";

import { planOptions } from "./helper/plansOptions";

import styles from "./styles.module.css";

export const SelectPlan = () => {
  const navigate = useNavigate();
  const { period, setPeriod, selectedPlan, setSelectedPlan } =
    React.useContext(FormContext);

  function toggleSwitch(value: boolean) {
    if (value) {
      return setPeriod("yearly");
    }
    setPeriod("monthly");
  }

  function handleValueChange(value: string) {
    setSelectedPlan(value);
  }

  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form>
        <Header
          title="Select your plan"
          paragraph="You have the option of monthly or yearly billing."
        />
        <div className={styles.radioWrapper}>
          <RadioGroup
            options={planOptions}
            ariaLabel="Select your plan"
            onValueChange={handleValueChange}
            value={selectedPlan}
          />
        </div>
        <div className={styles.switcherWrapper}>
          <span
            className={period === "monthly" ? `${styles.periodActive}` : ""}
          >
            Monthly
          </span>
          <Switch
            id="plansSwitch"
            label="Monthly or Yearly?"
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
        <Button as="button" background="none" onClick={() => navigate("/")}>
          Go Back
        </Button>
        <Button as="button" onClick={() => navigate("/add-ons")}>
          Next Step
        </Button>
      </div>
    </div>
  );
};
