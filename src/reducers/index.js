import { combineReducers } from "redux";
import flatReducer from "./flatReducer";

export default combineReducers({
  flats: flatReducer,
});
