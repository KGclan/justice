import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Sidebar from "widgets/sidebar";
import { BeersTable, beersModel } from "entities/beers";
import { Layout } from "shared/ui";
import { punkapi } from "shared/api";

import styles from "./styles.module.scss";

const Beers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beersModel.actions.setBeersIsLoading(true));
    punkapi.beer.getBeers()
      .then((responce) => dispatch(beersModel.actions.setBeers(responce.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(beersModel.actions.setBeersIsLoading(false)));
  }, []);

  return (
    <Layout sidebar={<Sidebar />}>
      <section className={styles.section}>
        <h1 className={styles.title}>Beers</h1>
        <h2 className={styles.subtitle}>Beers table</h2>
        <BeersTable />
      </section>
    </Layout>
  );
};

export default Beers;