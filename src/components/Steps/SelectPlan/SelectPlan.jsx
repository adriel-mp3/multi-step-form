import React from "react";
import styles from "./SelectPlan.module.css";
import Header from "../../Form/Header/Header";
import Radio from "../../Form/Radio/Radio";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";
import ToggleSwitch from "../../Form/ToggleSwitch/ToggleSwitch";
import NextStep from "../../Form/Button/NextStep";
import GoBack from "../../Form/Button/GoBack";
import { FormContext } from "../../../context/FormContext";
import { useNavigate } from "react-router-dom";

const SelectPlan = () => {
  const { selectedPlan, setSelectedPlan, period } =
    React.useContext(FormContext);
  const navigate = useNavigate();

  function handleNextButton() {
    navigate("/add-ons");
  }
  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form>
        <Header
          title="Select your plan"
          paragraph="You have the option of monthly or yearly billing."
        />
        <div className={styles.radioWrapper}>
          <Radio
            label="teste"
            name="arcade"
            title="Arcade"
            price="9"
            icon={arcadeIcon}
            setValue={setSelectedPlan}
            value={selectedPlan}
          />
          <Radio
            label="teste"
            name="advanced"
            title="Advanced"
            price="12"
            icon={advancedIcon}
            setValue={setSelectedPlan}
            value={selectedPlan}
          />
          <Radio
            label="teste"
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

export default SelectPlan;
