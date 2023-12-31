import React from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "@/hooks/useForm";

import { FormContext } from "@/context/FormContext";

import { Header } from "@/components/Form/Header/index";
import { Input } from "@/components/Form/Input/index";
import { Button } from "@/components/Button";

import styles from "./styles.module.css";

export const YourInfo = () => {
  const { setPersonalInfo } = React.useContext(FormContext);
  const navigate = useNavigate();
  const name = useForm();
  const email = useForm("email");
  const number = useForm("number");

  function handleNextButton() {
    const isDataValidate =
      name.validate() && email.validate() && number.validate();
    if (isDataValidate) {
      setPersonalInfo({
        name: name.value,
        email: email.value,
        number: number.value,
      });
      navigate("/select-plan");
    }
  }
  return (
    <div className={`formContainer ${styles.wrapper}`}>
      <form className={styles.content}>
        <Header
          title="Personal Info"
          paragraph="Please provide your name, email address, and phone number."
        />
        <Input
          id="name"
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
          {...name}
        />
        <Input
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          {...email}
        />
        <Input
          id="phone"
          label="Phone Number"
          placeholder="+99 (99) 99999-9999"
          type="tel"
          {...number}
        />
      </form>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleNextButton}>Next Step</Button>
      </div>
    </div>
  );
};
