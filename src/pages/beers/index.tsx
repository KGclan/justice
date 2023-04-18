import React from "react";

import Sidebar from "widgets/sidebar";
import { Layout } from "shared/ui";

import styles from "./styles.module.scss";

const Beers = () => (
  <Layout sidebar={<Sidebar />}>
    <div>123</div>
  </Layout>
);

export default Beers;