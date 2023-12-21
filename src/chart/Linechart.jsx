import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Months", "Tasks"],
  ["Jan", 26],
  ["Feb", 10],
  ["Mar", 35],
  ["Apr", 17],
  ["May", 18],
  ["Jun", 9],
  ["Jul", 11],
  ["Aug", 37],
  ["Sep", 18],
  ["Oct", 9],
  ["Nov", 31],
  ["Dec", 7],
];

export const options = {

title: "Overall Tasks Graph",
  hAxis: {
    title: "Months",
  },
  vAxis: {
    title: "Total Count",
  },
  series: {
    0: { curveType: "function" },
  },
  colors: ["#173767"],
  lineWidth: 4, 
  pointSize: 0,
//   chartArea: {
//     width: "90%",
//     height: "80%",
//   },
  legend: "none",
};

export default function Linechart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="180px"
      data={data}
      options={options}
    />
  );
}
