import React, { useRef } from "react";
import { map } from "lodash";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ItemTypes } from "./Constants";
import { XYCoord } from "dnd-core";
import { Icon } from "antd";
import { Table, DateFilter, PieChart } from "../../components/Charts/index";

export const renderLayout = (config: any, moveComponent: any) => {
  const style: any = {
    position: "relative",
    border: "1px dashed gray",
    margin: "1rem 1rem",
    backgroundColor: "white",
    cursor: "move"
  };

  const componentsDOM = map(config, (item, index) => {
    const { type, chart_id } = item;
    const itemCom = itemComponent(type)(chart_id);
    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      hover(item: any, monitor: DropTargetMonitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = ref.current!.getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY =
          (clientOffset as XYCoord).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        // Time to actually perform the action
        moveComponent(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      }
    });
    const [{ isDragging }, drag, preview] = useDrag({
      item: { type: ItemTypes.CARD, chart_id, index },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging()
      })
    });

    const opacity = isDragging ? 0 : 1;
    drop(ref);
    drag(ref2);
    return (
      <div ref={ref} style={{ ...style, opacity }} key={chart_id}>
        <div ref={preview}>
          <div
            ref={ref2}
            style={{ position: "absolute", top: "10px", right: "20px" }}
          >
            <Icon type="drag" />
          </div>
          {itemCom}
        </div>
      </div>
    );
  });

  return componentsDOM;
};
const itemComponent = (type: string) => {
  const components: any = {
    date: (chart_id: string) => {
      return <DateFilter chartId={chart_id}></DateFilter>;
    },
    piechart: (chart_id: string) => {
      return <PieChart chartId={chart_id}></PieChart>;
    },
    table: (chart_id: string) => {
      return <Table chartId={chart_id}></Table>;
    }
  };
  return components[type];
};
