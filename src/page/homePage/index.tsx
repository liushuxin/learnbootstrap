import  React,{useState} from 'react';
//import Menu from 'components/menu/index';
import Slider from 'components/Slider/index';
import getThemeContext from 'components/themeContext';
const ThemeContext = getThemeContext();

const HomePage = (props:any) => {
    const [ComponentsDOM, setComponent] = useState(<div>ceshi </div>);
    const wrapper  = React.createElement('div', null, ComponentsDOM);
    return <section>
        <Slider></Slider>
        {ComponentsDOM?wrapper:null}
        <button onClick={()=>{
           
            require.ensure([], function() {
                var baidumap = require('./Text') //baidumap.js放在我们当前目录下
                setComponent(baidumap.default);
            },(e)=>{
                console.warn(e);
            },'Text');
            // import(/* webpackChunkName: "text" */'./Text').then(res => {
            //     setComponent(res.default);
            // });

        }}>点击异步加载</button>
           
            <ThemeContext.Provider value="金黄色">
            
          </ThemeContext.Provider>
    </section>
   
}
export default HomePage;