import produce from 'immer';

import { Actions } from './actions';
import { State, initState } from './state';

export const reducer = (state: State = initState, action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return produce(state, (draft) => {
        draft.todos.push(action.payload.todo);
      });
    default:
      return state;
  }
};
