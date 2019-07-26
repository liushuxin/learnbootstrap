import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import Menu from './components/menu/index';
import Slider from './components/Slider';
import getThemeContext from './components/themeContext';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './page/admin';
import About from './page/about';
import HomePage from './page/homePage';

const ThemeContext = getThemeContext();
class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return <div className="lanxin-home-wrapper">
      <div className="lanxin-header-wrapper">
        <Router>
          <div className="header-nav">
          <span className="header-title">Lanxin Graduation Albums</span>
            <nav>
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

            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={About} />
            <Route path="/admin/" component={Admin} />
          </div>
        </Router>
        
      </div>
      <div className="lanxin-content-wrapper">
        <Slider></Slider>
            
          <ThemeContext.Provider value="金黄色">
          <Menu/>
        </ThemeContext.Provider>
      </div>
      
    </div>
  }

}

ReactDOM.render(<App/>,
  document.getElementById('app')
);
/**
 * Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言
 */

