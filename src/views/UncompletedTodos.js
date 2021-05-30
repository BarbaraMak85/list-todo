import React from "react";
import { useRecoilState } from "recoil";
/** @jsxImportSource theme-ui */
import TodoList from "../components/TodoList/TodoList";
import { unCompletedtodosState } from "../recoil/state";
import { todosTypes } from "../helpers/todosTypes";
import SearchTodoInput from "../components/SearchTodoInput/SearchTodoInput";
import Pagination from "../components/Pagination/Pagination";

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
        <SearchTodoInput todosType={todosTypes.unCompleted} />

        <h1
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            marginTop: "11px",
            fontSize: "18px",
          }}
        >
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
