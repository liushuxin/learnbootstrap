import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component<any,any>{
  constructor(props){
    super(props);
  }
  render(){
    return <div>渲染面板</div>
  }

}

ReactDOM.render(<App/>,
  document.querySelectorAll('#app')[0])

