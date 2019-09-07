import   React from "react";
import * as ReactDOM from "react-dom";
import "./index.less";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminAdd from "./page/admin/add";
// @ts-ignore
import HomePage from "./page/homePage";
// @ts-ignore
import Header from "./components/Header";

const { Suspense, lazy } = React;
// @ts-ignore
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ "./page/about")
);
// @ts-ignore
const Admin = lazy(() =>
  import(/* webpackChunkName: "Admin" */ "./page/admin")
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
