import  React from 'react';
import Menu from 'components/menu/index';
import Slider from 'components/Slider/index';
import getThemeContext from 'components/themeContext';
const ThemeContext = getThemeContext();
const HomePage = () => {
    return <section>
        <Slider></Slider>
            
            <ThemeContext.Provider value="金黄色">
            <Menu/>
          </ThemeContext.Provider>
    </section>
   
}
export default HomePage;