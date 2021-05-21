import React from "react";
import { useRecoilState } from "recoil";
/** @jsxImportSource theme-ui */
import TodoList from "../components/TodoList/TodoList";
import { unCompletedtodosState } from "../recoil/state";
import { todosTypes } from "../helpers/todosTypes";
import SearchTodoInput from "../components/SearchTodoInput/SearchTodoInput";

const UncompletedTodos = () => {
  const [unCompletedTodos, setUnCompletedTodos] = useRecoilState(
    unCompletedtodosState
  );

  return (
    <div
      sx={{
        marginTop: "25px",
      }}
    >
      <div sx={{ display: "flex", marginBottom: "20px", alignItems: "center" }}>
        <SearchTodoInput todosType={todosTypes.unCompleted} />

        <h1 sx={{ marginLeft: "87px", fontFamily: "Montserrat" }}>
          Uncompleted Todos
        </h1>
      </div>
      <TodoList
        todosArray={unCompletedTodos}
        todosType={todosTypes.unCompleted}
      />
    </div>
  );
};

export default UncompletedTodos;
