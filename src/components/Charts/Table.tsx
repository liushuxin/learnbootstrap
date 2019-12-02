import React from "react";
const Table = ({ chartId }: any) => {
  return (
    <div
      style={{
        height: "300px",
        margin: "20px",
        background: "white"
      }}
    >
      表格{chartId}
    </div>
  );
};
export default Table;
