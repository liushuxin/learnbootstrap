import React from "react";
import { Form, Icon, Input, Button } from "antd";
import LoginForm from "./loginForm";
interface DataConnectionProps {}
const DataConnection = (props: DataConnectionProps) => {
  return (
    <div className="data-collection-wrapper">
      <h5>数据收集</h5>
      <LoginForm />
    </div>
  );
};
export default DataConnection;
