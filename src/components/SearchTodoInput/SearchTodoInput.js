import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { todosTypes } from "../../helpers/todosTypes";
import {
  completedTodosState,
  staticCompletedTodosState,
  staticUnCompletedtodosState,
  unCompletedtodosState,
} from "../../recoil/state";
import { useRecoilState } from "recoil";
/** @jsxImportSource theme-ui */

const SearchTodoInput = ({ todosType }) => {
  const [searchInput, setSearchInput] = useState("");
  const [unCompletedTodos, setUnCompletedTodos] = useRecoilState(
    unCompletedtodosState
  );
  const [completedTodos, setCompletedTodos] =
    useRecoilState(completedTodosState);

  const [staticCompletedTodos, setStaticCompletedTodos] = useRecoilState(
    staticCompletedTodosState
  );

  const [staticUnCompletedTodos, setStaticUnCompletedTodos] = useRecoilState(
    staticUnCompletedtodosState
  );

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    searchTodo();
  }, [searchInput]);

  const searchTodo = () => {
    if (todosType === todosTypes.unCompleted) {
      if (searchInput.length !== 0) {
        const filteredTodos = staticUnCompletedTodos.filter(
          (todo) =>
            todo.title.toLowerCase().slice(0, searchInput.length) ===
            searchInput.toLowerCase()
        );

        setUnCompletedTodos([...filteredTodos]);
      } else {
        setUnCompletedTodos([...staticUnCompletedTodos]);
      }
    } else {
      if (searchInput.length !== 0) {
        const filteredTodos = staticCompletedTodos.filter(
          (todo) =>
            todo.title.toLowerCase().slice(0, searchInput.length) ===
            searchInput.toLowerCase()
        );

        setCompletedTodos([...filteredTodos]);
      } else {
        setCompletedTodos([...staticCompletedTodos]);
      }
    }
  };

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        "@media screen and (max-width: 750px)": { justifyContent: "center" },
      }}
    >
      <input
        sx={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          border: "none",
          outline: "none",
          width: "200px",
          height: "30px",
          textAlign: "center",
          marginRight: "5px",
          fontFamily: "Montserrat",
          "@media screen and (max-width: 750px)": {
            justifyContent: "center",
            width: "128px",
            height: "25px",
            marginTop: "10px",
          },
        }}
        value={searchInput}
        onChange={handleSearchInputChange}
        type="search"
        placeholder="search task"
      />
      <FontAwesomeIcon
        sx={{
          display: "grid",
          // alingItem: "center",
          color: "#fff",
        }}
        icon={faSearch}
      />
    </div>
  );
};

export default SearchTodoInput;
