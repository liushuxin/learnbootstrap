import * as React from 'react';
import ItemMenu from './itemMenu';
const { useState, useEffect, useLayoutEffect, useContext,useReducer } = React;
function reducer () {

}
const Menu = (props: any) => {
    const initialState = {count:0};
    const [state, setState] = useState({ data: 'red', });
    // const context = useContext(Context);
    let lightArr = ['red', 'blue', 'yellow'];
    let i = 1;
    useEffect(
        () => {
          
            setInterval(() => {
                console.log("异步操作！！！");
                
                setState({
                    data: lightArr[i]
                });
                i = i + 1;
                if (i === 3) {
                    i = 0;
                }

            }, 3000);
            
            

    },[]);
    return <div>
        菜单：
       <ItemMenu 
            setState={setState}
            data={state}
       />
    </div>
}
export default Menu;