import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return <div className="lanxin-home-wrapper">
      <div className="lanxin-header-wrapper">
        <span className="header-title">兰新平台</span>
        
      </div>
      <div className="lanxin-content-wrapper">
            渲染面板
      </div>
      
    </div>
  }

}

ReactDOM.render(<App/>,
  document.getElementById('app')
 );

