import  React from 'react';
let ThemeContext: any = null;
const getThemeContext = () => {
    if (ThemeContext){
        return ThemeContext;
    }else{
        ThemeContext = React.createContext('light');
        return ThemeContext;
    }
}
export default getThemeContext;