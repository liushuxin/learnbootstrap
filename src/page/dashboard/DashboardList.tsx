import React, { useState, useCallback } from "react";
import { renderLayout } from "./renderLayout";
import update from "immutability-helper";
/**
 * display_type:1 表示占整行，2表示平分
 */
const layoutData = [
  {
    chart_id: 1,
    type: "date",
    display_type: 1,
    config: {}
  },
  {
    chart_id: 2,
    type: "date",
    display_type: 1,
    config: {}
  },
  {
    chart_id: 3,
    type: "piechart",
    display_type: 1,
    config: {}
  },
  {
    chart_id: 4,
    type: "piechart",
    display_type: 1,
    config: {}
  },
  {
    chart_id: 5,
    type: "piechart",
    display_type: 1,
    config: {}
  },
  {
    chart_id: 6,
    type: "table",
    display_type: 1,
    config: {}
  }
];
const DashboardList = ({ props }: any) => {
  const [layoutConfig, setLayoutConfig] = useState(
    layoutData.map((item, i) => {
      return { ...item, index: i };
    })
  );
  const moveComponent = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = layoutConfig[dragIndex];
      setLayoutConfig(
        update(layoutConfig, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    },
    [layoutConfig]
  );
  return <div>{renderLayout(layoutConfig, moveComponent)}</div>;
};
export default DashboardList;
