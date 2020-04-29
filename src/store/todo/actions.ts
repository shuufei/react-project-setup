import { Action } from 'redux';
import { Todo } from './state';

export interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  payload: { todo: Todo };
}

export const addTodo = (payload: AddTodoAction['payload']): AddTodoAction => ({
  type: 'ADD_TODO',
  payload,
});

export type Actions = AddTodoAction;

export const actionCreator = {
  addTodo,
};
