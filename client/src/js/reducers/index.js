import {combineReducers} from "redux";
import passwords from "./passwords";
import passwordStatus from "./passwordStatus";

const allReducers = combineReducers({
  passwords,
  passwordStatus
});

export default allReducers;
