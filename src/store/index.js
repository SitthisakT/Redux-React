import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosReducer } from "./todos";
import { visibilityFilterReducer } from "./visibilityFilter";
import logger from "redux-logger";

export const store = createStore(
  combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
  }),
  applyMiddleware(logger)
);
