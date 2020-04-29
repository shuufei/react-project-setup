export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

export type State = {
  todos: Todo[];
};

export const initState: State = {
  todos: [],
};
