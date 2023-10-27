import React from "react";

import { useNavigate } from "react-router-dom";

import { FormContext } from "@/context/FormContext";

import { Header } from "@/components/Form/Header";
import { Radio } from "@/components/Form/Radio/index";
import { ToggleSwitch } from "@/components/Form/ToggleSwitch/index";
import { NextStep } from "@/components/Form/Button/NextStep";
import { GoBack } from "@/components/Form/Button/GoBack";

import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";

import styles from "./styles.module.css";

export const SelectPlan = () => {
  const { selectedPlan, setSelectedPlan, period } =
    React.useContext(FormContext);
  const navigate = useNavigate();

  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form>
        <Header
          title="Select your plan"
          paragraph="You have the option of monthly or yearly billing."
        />
        <div className={styles.radioWrapper}>
          <Radio
            label="Arcade"
            name="arcade"
            title="Arcade"
            price="9"
            icon={arcadeIcon}
            setValue={setSelectedPlan}
            value={selectedPlan}
          />
          <Radio
            label="Advanced"
            name="advanced"
            title="Advanced"
            price="12"
            icon={advancedIcon}
            setValue={setSelectedPlan}
            value={selectedPlan}
          />
          <Radio
            label="Pro"
            name="pro"
            title="Pro"
            price="15"
            icon={proIcon}
            setValue={setSelectedPlan}
            value={selectedPlan}
          />
        </div>
        <div className={styles.switcherWrapper}>
          <span
            className={period === "monthly" ? `${styles.periodActive}` : ""}
          >
            Monthly
          </span>
          <ToggleSwitch />
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
