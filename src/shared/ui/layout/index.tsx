import React from "react";

import styles from "./styles.module.scss";

interface ILayout {
  sidebar: JSX.Element;
  children: JSX.Element;
}

export const Layout: React.FC<ILayout> = ({ sidebar, children }) => (
  <div className={styles.wrapper}>
    { sidebar }
    <main className={styles.main}>
      { children }
    </main>
  </div>
);