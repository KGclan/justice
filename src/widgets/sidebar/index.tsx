import React from "react";

import { Navigation } from "entities/navigation";

import styles from "./styles.module.scss";
import { Icons } from "shared/ui";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.logo} to="/"><Icons.Logo /></Link>
      <Navigation />
      <div className={styles.logOutWrapper}>
        <div className={styles.line} />
        <Link className={styles.logOut} to="/">Log out</Link>
      </div>
    </aside>
  );
};

export default Sidebar;