import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { RootState } from "app/store/types";
import Sidebar from "widgets/sidebar";
import { BeerBarChart, BeerLineChart, BeerPieChart } from "entities/beers";
import { Layout } from "shared/ui";

import styles from "./styles.module.scss";

const BeerStatistics = () => {
  const { selectedBeer } = useSelector((state: RootState) => state.beers);
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedBeer === null) navigate("/");
  }, []);

  return (
    <Layout sidebar={<Sidebar />}>
      <section className={styles.section}>
        <h1 className={styles.title}>Beer statistics</h1>
        <h2 className={styles.subtitle}>Welcome to CRM dashboard</h2>
        <div className={styles.grayLine} />
        <section className={styles.chartsWrapper}>
          <div className={styles.pieAndLine}>
            <div className={styles.pie}>
              <BeerPieChart />
            </div>
            <div className={styles.line}>
              <BeerLineChart />
            </div>
          </div>
          <div className={styles.bar}>
            <BeerBarChart />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default BeerStatistics;