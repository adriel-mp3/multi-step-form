import { Header } from "@/components/Form/Header/index";

import checkmark from "@/assets/images/icon-thank-you.svg";

import styles from "./styles.module.css";

export const ThankYou = () => {
  return (
    <div className={styles.wrapper}>
      <img src={checkmark} alt="Checkmark" />
      <Header
        title="Thank you!"
        paragraph="Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com."
      />
    </div>
  );
};
