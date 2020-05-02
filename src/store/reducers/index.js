import { combineReducers } from "redux";
import { shapeReducer } from "./shape.reducer";

const rootReducer = combineReducers(
    {
        shape: shapeReducer
    }
);

export default rootReducer;
