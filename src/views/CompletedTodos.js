import React from "react";
import { useRecoilState } from "recoil";
import TodoList from "../components/TodoList/TodoList";
import { completedTodosState } from "../recoil/state";
/** @jsxImportSource theme-ui */
import { todosTypes } from "../helpers/todosTypes";
import SearchTodoInput from "../components/SearchTodoInput/SearchTodoInput";
import Pagination from "../components/Pagination/Pagination";
const CompletedTodos = () => {
  const [completedTodos, setCompletedTodos] =
    useRecoilState(completedTodosState);

  console.log(completedTodos);
  return (
    <div
      sx={{
        marginTop: "25px",
      }}
    >
      <div
        sx={{
          "@media screen and (max-width: 750px)": {
            display: "grid",
            justifyContent: "end",
          },
        }}
      >
        <Pagination />
      </div>
      <div sx={{ display: "grid" }}>
        <SearchTodoInput todosType={todosTypes.completed} />
        <h1
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            marginTop: "11px",
            fontSize: "18px",
          }}
        >
          CompletedTodos
        </h1>
      </div>
      <TodoList todosArray={completedTodos} todosType={todosTypes.completed} />
    </div>
  );
};

export default CompletedTodos;
