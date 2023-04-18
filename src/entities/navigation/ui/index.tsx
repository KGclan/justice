import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store/types";
import { Icons } from "shared/ui";

import { INav, navModel } from "../model";

import styles from "./styles.module.scss";

export const Navigation = () => {
  const { navs, selectedNav } = useSelector((state: RootState) => state.navs);
  const dispatch = useDispatch();

  const iconsSelector = (nav: INav) => {
    const setColor = () => {
      if (selectedNav?.id === nav.id) return "#5382E7";
      return undefined;
    };

    switch(nav.title) {
    case "Beers Table": return <Icons.Document color={setColor()} />;
    case "Main Page": return <Icons.Home color={setColor()} />;
    case "My sales": return <Icons.Percent color={setColor()} />;
    case "Personal Cabinet": return <Icons.User color={setColor()} />;
    };
  };

  return (
    <nav className={styles.nav}>
      {
        navs.map((nav) => (
          <Link
            key={nav.id}
            className={selectedNav?.id === nav.id ? styles.activeLink : styles.link}
            to={nav.ref}
            onClick={() => dispatch(navModel.actions.setSelectedNav(nav))}
          >
            {iconsSelector(nav)}{nav.title}
          </Link>
        ))
      }
    </nav>
  );
};