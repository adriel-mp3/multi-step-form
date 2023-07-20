import React from "react";
import Header from "../../Form/Header/Header";
import Input from "../../Form/Input/Input";
import NextStep from "../../Form/Button/NextStep";
import styles from "./YourInfo.module.css";
import { FormContext } from "../../../context/FormContext";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
const YourInfo = () => {
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
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
          {...name}
        />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          {...email}
        />
        <Input
          label="Phone Number"
          placeholder="+99 (99) 99999-9999"
          type="tel"
          {...number}
        />
      </form>
      <div className={styles.buttonWrapper}>
        <NextStep onClick={handleNextButton} />
      </div>
    </div>
  );
};

export default YourInfo;
