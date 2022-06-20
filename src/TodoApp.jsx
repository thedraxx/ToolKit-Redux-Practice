import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  //Esto viene de todosApi.js
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "true" : "false"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={nextTodo}>Next Todo</button>
      <button onClick={prevTodo}>Previus Todo</button>
      {/* <ul>
        {todos.map((todo) => (
          <li>
            {todo.title}
            <strong>{todo.completed ? " (completed)" : "(incomplete)"} </strong>
          </li>
        ))}
      </ul> */}
    </>
  );
};
