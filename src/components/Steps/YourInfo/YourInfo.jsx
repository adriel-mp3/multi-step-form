import React from "react";
import Header from "../../Form/Header/Header";
import Input from "../../Form/Input/Input";
import NextStep from "../../Form/Button/NextStep";
import styles from "./YourInfo.module.css";

const YourInfo = () => {
  return (
    <form className={`formContainer ${styles.wrapper}`}>
      <div className={styles.content}>
        <Header
          title="Personal Info"
          paragraph="Please provide your name, email address, and phone number."
        />
        <Input label="Name" placeholder="e.g. Stephen King" type="text" />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="tel"
        />
      </div>
      <div className={styles.button}>
        <NextStep />
      </div>
    </form>
  );
};

export default YourInfo;
