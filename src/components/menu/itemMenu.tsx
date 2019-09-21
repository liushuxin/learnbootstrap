import * as React from "react";
import getThemeContext from "../themeContext";
const ThemeContext = getThemeContext();
const { useContext } = React;
class ItemMenu extends React.Component<any, any> {
  static contextType = ThemeContext;
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { setState } = this.props;
    // setTimeout(()=> {
    //     setState({
    //         data:'blue',
    //     })

    // },3000);
  }
  render() {
    const {
      data: { data }
    } = this.props;
    // const value = useContext(ThemeContext);
    return (
      <div>
        <div>Context 外部信息：{this.context}</div>
      </div>
    );
  }
}
export default ItemMenu;
{
  /* <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="50" r="40" stroke={data}
        strokeWidth="2" fill={data} />

</svg> */
}
