import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { useSelector } from "react-redux";

import { RootState } from "app/store/types";

export const BeerBarChart = () => {
  const selectedBeer = useSelector((state: RootState) => state.beers.selectedBeer);
  const labels = ["ABV", "IBU", "EBC", "SRM", "PH", "AL"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Overview",
        align: "start",
        color: "#2B3844",
        font: {
          weight: 600,
          size: 18,
        },
      },
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
        color: "#2B3844",
        font: {
          weight: 600,
          size: 18,
        },
        padding: 24,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border:{
          display:false,
        },
      },
      y: {
        border:{
          color: "rgba(232, 235, 239, 0.4)",
        },
      },
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  );

  const data = {
    labels,
    datasets: [
      {
        data: [
          selectedBeer?.abv,
          selectedBeer?.ibu,
          selectedBeer?.ebc,
          selectedBeer?.srm,
          selectedBeer?.ph,
          selectedBeer?.attenuation_level,
        ],
        backgroundColor: "#5B6ACD",
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  );
};