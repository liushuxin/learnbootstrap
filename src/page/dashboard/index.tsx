import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DashBoardList from "./DashboardList";

const Dashboard = ({ props }: any) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DashBoardList></DashBoardList>
    </DndProvider>
  );
};
export default Dashboard;
