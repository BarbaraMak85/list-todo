import React from "react";
import { mainTheme } from "../../themes/mainTheme";
/** @jsxImportSource theme-ui */

import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todosArray, todosType }) => {
  return (
    <ul
      sx={{
        height: "70vh",
        overflowY: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginRight: "6px",
        paddingTop: "20px",
      }}
    >
      {todosArray.map((todo) => (
        <li sx={{}} key={todo.id}>
          <TodoListItem {...todo} todosType={todosType} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
