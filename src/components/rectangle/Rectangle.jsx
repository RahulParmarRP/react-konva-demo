import React from "react";
import { Rect } from "react-konva";


const Rectangle = (props) => {
    const { properties } = props;
    return (
        <Rect
            x={properties.x}
            y={properties.y}
            width={properties.width}
            height={properties.height}
            fill={properties.fill}
            draggable={properties.draggable}
            shadowBlur={10}
        />
    );
};

export default Rectangle;