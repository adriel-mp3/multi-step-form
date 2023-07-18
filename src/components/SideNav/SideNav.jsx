import React from "react";
import { NavLink } from "react-router-dom";
import sidenavItems from "./helper/sidenavItems";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {sidenavItems.map(({ stepTitle, route }, index) => (
          <li key={route} className={styles.navItem}>
            <NavLink
              to={route}
              {...(index === 0 ? { end: true } : {})}
              className={styles.navLink}
            >
              <span className={styles.stepNumber}>{index + 1}</span>
              <div>
                <span className={styles.stepLabel}>{`STEP ${index + 1}`}</span>
                <p className={styles.stepTitle}>{stepTitle}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
