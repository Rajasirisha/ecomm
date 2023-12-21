import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Days", "Ongoing Tasks", "Delivered Tasks", "New Tasks"],
  ["1", 16, 9, 14],
  ["2", 15, 14, 20],
  ["3", 19, 11, 13],
  ["4", 13, 24, 19],
  ["5", 17, 13, 17],
  ["6", 25, 11, 18],
  ["7", 23, 15, 16],
];

export const options = {
  chart: {
    title: "Task Progress Graph",
    subtitle: "Ongoing Tasks, Delivered Tasks, and New Tasks",
  },
  hAxis: {
  title: "Days",
},
vAxis: {
  title: "Total Count",
},
  colors:["#173767", "#FF785A", "#E2A925"],

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
