import { NavLink } from "react-router-dom";

import { sideNavData } from "./helper/SideNavData";

import styles from "./styles.module.css";

export const SideNav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {sideNavData.map(({ stepTitle, route }, index) => (
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
