import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { RootState } from "app/store/types";

import styles from "./styles.module.scss";

export const BeerLineChart = () => {
  const { selectedBeer } = useSelector((state: RootState) => state.beers);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  );
  
  const options = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Hops",
        align: "start",
        color: "#2B3844",
        font: {
          weight: 600,
          size: 18,
        },
      },
    },
    elements: {
      point:{
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border:{
          display:false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border:{
          display:false,
        },
      },
    },
  };
  
  const labels = selectedBeer?.ingredients.hops.map((item) => item.name);
  
  const data = {
    labels,
    datasets: [
      {
        data: selectedBeer?.ingredients.hops.map((item) => item.amount.value),
        borderColor: "#1CAF7F",
        backgroundColor: "#1CAF7F",
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Line height={70} options={options} data={data} />
      <p className={styles.count}>{data?.datasets[0]?.data?.slice(-1) || 0}</p>
    </div>
  );
};
