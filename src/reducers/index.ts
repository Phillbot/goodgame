import { combineReducers } from "redux";
import { streamListReducer } from "./redusers";

const rootReducer = combineReducers({
  streamListReducer,
});

export default rootReducer;
