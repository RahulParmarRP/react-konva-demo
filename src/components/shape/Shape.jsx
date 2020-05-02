import React from "react";
import Circle from '../circle/Circle';
import Rectangle from '../rectangle/Rectangle';

const Shape = (props) => {
    const { shape } = props;

    if (shape.type === 'square') {
        return (
            <Rectangle properties={shape} />
        );
    }

    if (shape.type === 'circle') {
        return (
            <Circle properties={shape} />
        );
    }
};

export default Shape;