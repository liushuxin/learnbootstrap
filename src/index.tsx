import React from "react";
import * as ReactDOM from "react-dom";
import "./index.less";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminAdd from "./page/admin/add";
import HomePage from "./page/homePage";
import Header from "./components/Header";
import "antd/dist/antd.less";
import Raven from "raven-js";
const DSN = "http://428889ef970440709dec37c5dd626448@localhost:9000/2";
const release = Raven.config(DSN, {
  release: "staging@1.0.1"
}).install();
const { Suspense, lazy } = React;
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ "./page/about")
);
const Admin = lazy(() =>
  import(/* webpackChunkName: "Admin" */ "./page/admin")
);
const DataConnection = lazy(() =>
  import(/* webpackChunkName: "DataConnection" */ "./page/dataCollection")
);
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="lanxin-home-wrapper">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="lanxin-header-wrapper">
              <div className="header-nav">
                <nav>
                  <Header />
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about/">About</Link>
                    </li>
                    <li>
                      <Link to="/admin/">Users</Link>
                    </li>
                    <li>
                      <Link to="/data/collection/">数据管理</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="lanxin-content-wrapper">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about/" component={About} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/add/:id" component={AdminAdd} />
                <Route
                  exact
                  path="/data/collection"
                  component={DataConnection}
                />
              </Switch>
            </div>
          </Suspense>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
/**
 * Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言
 */
