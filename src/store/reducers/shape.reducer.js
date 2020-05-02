const square = {
    type: 'square',
    x: 20,
    y: 20,
    width: 50,
    height: 50,
    fill: "red",
    draggable: true
};

const initialState = {
    shapes: []
};

export function shapeReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_SQUARE':
            debugger;
            return state.shapes.concat(square);
        default:
            debugger;
            return state;
    }
}