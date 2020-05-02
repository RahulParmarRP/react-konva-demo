import React from 'react';
import './Home.css';
import Canvas from '../canvas/Canvas';

const square = {
    type: 'square',
    x: 20,
    y: 20,
    width: 50,
    height: 50,
    fill: "red",
    draggable: true
};

const circle = {
    type: 'circle',
    x: 200,
    y: 100,
    radius: 50,
    fill: "green",
    draggable: true,
};

export const Home = () => {
    const [canvasObjects, setCanvasObjects] = React.useState([]);

    const addShapeToCanvas = (shapeType) => {
        if (shapeType === 'square') setCanvasObjects(canvasObjects.concat(square));
        if (shapeType === 'circle') setCanvasObjects(canvasObjects.concat(circle));
    };

    return (
        <>
            <div className="Toolbar">
                <button onClick={() => addShapeToCanvas('square')}>
                    Add Square
                </button>
                <button onClick={() => addShapeToCanvas('circle')}>
                    Add Circle
                </button>
            </div>
            <div className="Canvas-Wrapper">
                <Canvas canvasObjects={canvasObjects} />
            </div>
        </>
    );
};

export default Home;
