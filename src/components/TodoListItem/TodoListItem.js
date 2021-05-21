import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRecoilState } from "recoil";
import { completedTodosState, unCompletedtodosState } from "../../recoil/state";
import { todosTypes } from "../../helpers/todosTypes";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
/** @jsxImportSource theme-ui */

const TodoListItem = ({ title, created_at, id, todosType }) => {
  const [unCompletedTodos, setUnCompletedTodos] = useRecoilState(
    unCompletedtodosState
  );
  const [completedTodos, setCompletedTodos] =
    useRecoilState(completedTodosState);

  const editTodo = (e, todoId) => {
    if (todosType === todosTypes.unCompleted) {
      const todosAfterEdit = unCompletedTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title: e.target.value,
          };
        } else {
          return todo;
        }
      });

      setUnCompletedTodos([...todosAfterEdit]);
    } else {
      const todosAfterEdit = completedTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title: e.target.value,
          };
        } else {
          return todo;
        }
      });

      setCompletedTodos([...todosAfterEdit]);
    }
  };

  const deleteTodo = (todoId) => {
    if (todosType === todosTypes.unCompleted) {
      const filteredTodos = unCompletedTodos.filter(
        (todo) => todo.id !== todoId
      );

      setUnCompletedTodos([...filteredTodos]);
    } else {
      const filteredTodos = completedTodos.filter((todo) => todo.id !== todoId);

      setCompletedTodos([...filteredTodos]);
    }
  };

  return (
    <div
      sx={{
        position: "relative",
        width: "250px",
        height: "200px",
        marginBottom: "20px",
      }}
    >
      <textarea
        sx={{
          resize: "none",
          width: "100%",
          height: "100%",
          borderRadius: "25px",
          padding: "14px",
          outline: "none",
          borderTop: "6px solid rgb(255 165 0)",
          borderBottom: "1px solid #fff",
          borderRight: "1px solid #fff",
          borderLeft: "1px solid #fff",
          fontFamily: "Montserrat",
        }}
        type="text"
        value={title}
        placeholder="Type your todo..."
        onChange={(e) => editTodo(e, id)}
      />
      <p sx={{ position: "absolute", bottom: "3%", left: "4%" }}>
        {moment(created_at).format("DD/MM/YY")}
      </p>
      <p sx={{ position: "absolute", bottom: "3%", right: "4%" }}>
        {title.length} / 500
      </p>

      <FontAwesomeIcon
        sx={{
          color: "red",
          padding: "3px",
          position: "absolute",
          zIndex: "100",
          top: "-4%",
          right: "-3.5%",
          backgroundColor: "white",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        icon={faTimesCircle}
        size="2x"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default TodoListItem;
