import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';

import { HashRouter as Router, Route, Link,Switch } from "react-router-dom";
import Admin from './page/admin';
import About from './page/about';
import AdminAdd from './page/admin/add';
import HomePage from './page/homePage';
import Header from './components/Header';
class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return <div className="lanxin-home-wrapper">
       <Router>
      <div className="lanxin-header-wrapper">
       
          <div className="header-nav">
            <nav>
            <Header></Header>
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
      <Route path="/" exact component={HomePage} />
      <Route path="/about/" component={About} />
      <Route exact  path="/admin" component={Admin}/>
      <Route exact path="/admin/add/:id" component={AdminAdd}></Route>
      
      </div>
      </Router>
    </div>
  }

}

ReactDOM.render(<App/>,
  document.getElementById('app')
);
/**
 * Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言
 */

