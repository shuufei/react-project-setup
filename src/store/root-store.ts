import { combineReducers, createStore } from 'redux';

import * as Todo from './todo';

export type RootState = {
  todo: Todo.State;
};

export const rootReducer = combineReducers({
  todo: Todo.reducer,
});

export const actionCreator = {
  todo: Todo.actionCreator,
};

export const store = createStore(rootReducer);
