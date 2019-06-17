import * as React from 'react';
import ItemMenu from './itemMenu';
const { useState } = React;

const Menu = (props: any) => {
    const [state, setState] = useState({ data: 'React Hooks' });
    return <div>
        菜单：
       <ItemMenu 
            setState={setState}
            data={state}
       />
    </div>
}
export default Menu;