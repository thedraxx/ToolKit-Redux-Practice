import React from "react";
import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { data: todos = [], isLoading, isFetching } = useGetTodosQuery();
  console.log();
  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "true" : "false"}</h4>
      <pre>...</pre>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.title}
            <strong>{todo.completed ? " (completed)" : "(incomplete)"} </strong>
          </li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  );
};
