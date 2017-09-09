import { combineEpics, createEpicMiddleware } from "redux-observable";
import getPasswordsEpic from "./getPasswordsEpic";

const allEpics = combineEpics(
  getPasswordsEpic
);

const epicMiddleware = createEpicMiddleware(
  allEpics
);

export default epicMiddleware;
