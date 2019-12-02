import React from "react";
import { DragSource } from "react-dnd";
import Box from "./Dustbin/Box";
import "./index.less";
const Admin = ({ children }: any) => {
  return (
    <div className="user-wrapper">
      管理员管理
      {children || "Welcome to your Inbox"}
      <Box></Box>
    </div>
  );
};
export default Admin;
