import React from "react";
import { Stage, Layer } from "react-konva";
import Shape from "../shape/Shape";

export const Canvas = (props) => {
    const { canvasObjects } = props;

    return (
        <Stage
            width={500}
            height={500}
            style={{ border: '1px solid grey', background: "white" }}
        >
            <Layer>
                {canvasObjects.map(shape => <Shape shape={shape} />)}
            </Layer>
        </Stage>
    );
};

export default Canvas;