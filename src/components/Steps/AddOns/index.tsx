import React from "react";
import Header from "../../Form/Header/Header";
import Checkbox from "../../Form/Checkbox/Checkbox";
import GoBack from "../../Form/Button/GoBack";
import NextStep from "../../Form/Button/NextStep";
import styles from "./AddOns.module.css";
import { Link } from "react-router-dom";
import { FormContext } from "../../../context/FormContext";

const AddOns = () => {
  const { addOns, setAddOns } = React.useContext(FormContext);

  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form className={styles.formWrapper}>
        <Header
          title="Pick add-ons"
          paragraph="Add-ons help enhance your gaming experience."
        />
        <Checkbox
          title={"Online Service"}
          description={"Access to multiplayer games"}
          price={1}
          name="Online Service"
          value="Online Service"
          addOns={addOns}
          setAddOns={setAddOns}
        />
        <Checkbox
          title={"Larger Storage"}
          description={"Extra 1TB of cloud save"}
          price={2}
          name="Larger Storage"
          value="Larger Storage"
          addOns={addOns}
          setAddOns={setAddOns}
        />
        <Checkbox
          title={"Customizable Profile"}
          description={"Custom theme on your profile"}
          price={2}
          name="Customizable Profile"
          value="Customizable Profile"
          addOns={addOns}
          setAddOns={setAddOns}
        />
      </form>
      <div className={styles.buttonsWrapper}>
        <Link to="/select-plan">
          <GoBack />
        </Link>
        <Link to="/summary">
          <NextStep />
        </Link>
      </div>
    </div>
  );
};

export default AddOns;
