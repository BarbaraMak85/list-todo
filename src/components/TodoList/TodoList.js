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

        "@media screen and (max-width: 1100px)": {
          gridTemplateColumns: " 1fr 1fr",

          justifyContent: "center",
        },
        "@media screen and (max-width: 650px)": {
          gridTemplateColumns: " 1fr",

          justifyContent: "center",
        },
      }}
    >
      {todosArray.map((todo) => (
        <li
          sx={{
            "@media screen and (max-width: 1100px)": {
              display: "grid",
              justifyContent: "center",
            },
            "@media screen and (max-width: 650px)": {
              display: "grid",
              justifyContent: "center",
            },
          }}
          key={todo.id}
        >
          <TodoListItem {...todo} todosType={todosType} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
