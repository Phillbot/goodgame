import { combineReducers } from "redux";
import { streamerReducer, closeChatReducer } from "./redusers";

const rootReducer = combineReducers({
  streamerReducer,
  closeChatReducer,
});

export default rootReducer;
