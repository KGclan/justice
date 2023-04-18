import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { RootState } from "app/store/types";

export const BeerPieChart = () => {
  const { selectedBeer } = useSelector((state: RootState) => state.beers);
  
  ChartJS.register(ArcElement, Legend);

  const data = {
    labels: selectedBeer?.ingredients.malt.map((item) => item.name),
    datasets: [
      {
        data: selectedBeer?.ingredients.malt.map((item) => item.amount.value),
        backgroundColor: [
          "#5B6ACD",
          "#5182E7",
          "#F4AE43",
          "#1CAF7F",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 35,
        },
      },
      title: {
        display: true,
        text: "Malt",
        align: "start",
        color: "#2B3844",
        font: {
          weight: 600,
          size: 18,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};
