import React from "react";
import { useRecoilState } from "recoil";
import TodoList from "../components/TodoList/TodoList";
import { completedTodosState } from "../recoil/state";
/** @jsxImportSource theme-ui */
import { todosTypes } from "../helpers/todosTypes";
import SearchTodoInput from "../components/SearchTodoInput/SearchTodoInput";
const CompletedTodos = () => {
  const [completedTodos, setCompletedTodos] =
    useRecoilState(completedTodosState);
  return (
    <div
      sx={{
        marginTop: "25px",
      }}
    >
      <div sx={{ display: "flex", marginBottom: "20px", alignItems: "center" }}>
        <SearchTodoInput todosType={todosTypes.completed} />
        <h1 sx={{ marginLeft: "87px" }}>CompletedTodos</h1>
      </div>

      <TodoList todosArray={completedTodos} todosType={todosTypes.completed} />
    </div>
  );
};

export default CompletedTodos;
