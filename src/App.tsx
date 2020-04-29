import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store/root-store';
import { actionCreator } from './store/todo';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <div className="App">
      <button
        type="button"
        onClick={() =>
          dispatch(
            actionCreator.addTodo({
              todo: {
                id: 0,
                title: '牛乳買う',
                isDone: false,
              },
            })
          )
        }
      >
        add todo
      </button>
      {todos.map((v) => (
        <p
          css={css`
            margin-top: 8px;
          `}
        >
          {v.title}
        </p>
      ))}
    </div>
  );
};

export default App;
