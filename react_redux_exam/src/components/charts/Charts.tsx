import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import "../../style.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export function Chart() {
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );
  const labels = products.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Закупочная цена",
        data: products.map((item) => item.purchasePrice),
        backgroundColor: "rgba(251, 0, 54, 0.5)",
        borderColor: "rgba(251, 0, 54, 1)",
        fill: false,
      },
      {
        label: "Цена продажи",
        data: products.map((item) => item.sellingPrice),
        backgroundColor: "rgba(10, 87, 220, 0.5)",
        borderColor: "rgba(10, 87, 220, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "График анализа цен:",
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <Line data={data} className="chart-block" />
    </>
  );
};

