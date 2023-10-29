import React from "react";

import { Link } from "react-router-dom";

import { Header } from "@/components/Form/Header/index";
import { Checkbox } from "@/components/Steps/AddOns/Checkbox";
import { GoBack } from "@/components/Button/GoBack/index";
import { NextStep } from "@/components/Button/NextStep/index";

import { FormContext } from "@/context/FormContext";

import { checkboxOptions } from "./helper/checkboxOptions";

import styles from "./styles.module.css";

export const AddOns = () => {
  const { addOns, setAddOns } = React.useContext(FormContext);

  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form className={styles.formWrapper}>
        <Header
          title="Pick add-ons"
          paragraph="Add-ons help enhance your gaming experience."
        />
        {checkboxOptions.map((checkbox) => (
          <Checkbox
            title={checkbox.title}
            description={checkbox.description}
            price={checkbox.price}
          />
        ))}
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
