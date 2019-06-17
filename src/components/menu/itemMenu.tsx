import * as React from 'react';
import getThemeContext from '../themeContext';
const ThemeContext = getThemeContext();
class ItemMenu extends React.Component<any,any> {
    static contextType = ThemeContext;
    constructor(props:any){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        const { setState} = this.props;
        setTimeout(()=> {
            setState({
                data:'我改变啦',
            })

        },3000);
    }
    render(){
        const {data:{data}} = this.props;
        return <div>
            <div>
                Context 外部信息：{this.context}
            </div>
            主题颜色：{data}
            </div>
    }
}
export default ItemMenu;