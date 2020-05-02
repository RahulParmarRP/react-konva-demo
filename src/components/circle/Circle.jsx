import React from "react";
import { Circle as KonvaCircle } from "react-konva";


const Circle = (props) => {
    const { properties } = props;
    return (
        <KonvaCircle
            x={properties.x}
            y={properties.y}
            radius={properties.radius}
            fill={properties.fill}
            draggable={properties.draggable}
            shadowBlur={10}
        />
    );
};

export default Circle;