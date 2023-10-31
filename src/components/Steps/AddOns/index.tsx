import React from "react";

import { useNavigate } from "react-router-dom";

import { Header } from "@/components/Form/Header/index";
import { Checkbox } from "@/components/Form/Checkbox";
import { Button } from "@/components/Button";

import { FormContext } from "@/context/FormContext";

import { checkboxOptions } from "./helper/checkboxOptions";

import styles from "./styles.module.css";

export const AddOns = () => {
  const { addOns, setAddOns } = React.useContext(FormContext);
  const navigate = useNavigate();

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
        <Button onClick={() => navigate("/select-plan")} background="none">
          Go Back
        </Button>
        <Button onClick={() => navigate("/summary")}>Next Step</Button>
      </div>
    </div>
  );
};
