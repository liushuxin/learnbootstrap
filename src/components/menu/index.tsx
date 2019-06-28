import * as React from 'react';
import ItemMenu from './itemMenu';
const { useState, useEffect, useLayoutEffect, useContext,useReducer } = React;
/**
 * 
 * @param 
 * @param asd 
 */
const initialState = { count: 0 };
function reducer(state:any, action:any) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
}

const Menu = (props: any) => {
    const initialState = {count:0};
    const [state, setState] = useState({ data: 'red', });
    const [state1, dispatch] = useReducer(reducer, { count: 3 });
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
    return <div className="menu-wrapper">
        
        菜单：{state1.count}
        <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
      </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
            Add
      </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
            Subtract
      </button>
       <ItemMenu 
            setState={setState}
            data={state}
       />
    </div>
}
export default Menu;