import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { baseUrl } from "../api/apiUrls";
import {
  unCompletedtodosState,
  completedTodosState,
  staticCompletedTodosState,
  staticUnCompletedtodosState,
} from "../recoil/state";
import Router from "../routing/Router";
import { ThemeProvider } from "@theme-ui/theme-provider";
import { mainTheme } from "../themes/mainTheme";
import MainTemplate from "../templates/MainTemplate";

const Root = () => {
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

  useEffect(() => {
    getTodosFromApi();
  }, []);

  const getTodosFromApi = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res);

        const tempUnCompletedTodos = res.data.data.filter(
          (item) => item.completed === false
        );
        const tempCompletedTodos = res.data.data.filter(
          (item) => item.completed === true
        );

        setUnCompletedTodos([...tempUnCompletedTodos]);
        setStaticUnCompletedTodos([...tempUnCompletedTodos]);
        setCompletedTodos([...tempCompletedTodos]);
        setStaticCompletedTodos([...tempCompletedTodos]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <MainTemplate>
        <Router />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
