// 垃圾
import React, { PureComponent, useState } from "react";
import { DragSource } from "react-dnd";
const sourceSpec = {
  beginDrag(props: any, monitor: any, component: any) {
    // 返回需要注入的属性
    return {
      id: props.id
    };
  },
  endDrag(props: any, monitor: any, component: any) {
    // ..
  },
  canDrag(props: any, monitor: any) {
    // ..
    return true;
  },
  isDragging(props: any, monitor: any) {
    // ..
    return true;
  }
};
//@ts-ignore
// @DragSource("type", sourceSpec, (connect: any) => ({
//   connectDragSource: connect.dragSource(),
//   connectDragPreview: connect.dragPreview()
// }))
const Box = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <div>
      垃圾废物{count}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Box;
