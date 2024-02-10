import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Days", "Words"],
  ["1", 3000],
  ["2", 4000],
  ["3", 1000],
  ["4", 2000],
  ["5", 4000],
  ["6", 1000],
  ["7", 5000],
];

export const options = {
  chart: {
    title: "Word Count"
  },
  hAxis: {
  title: "Days",
},
  vAxis: {
  title: "Words",
},
  colors:["#173767"],
  legend: "none",

};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="180px"
      data={data}
      options={options}
    />
  );
}
