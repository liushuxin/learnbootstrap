import React from "react";
const PieChart = ({ chartId }: any) => {
  return (
    <div
      style={{
        height: "300px",

        margin: "20px",
        background: "white"
      }}
    >
      饼图{chartId}
    </div>
  );
};
export default PieChart;
