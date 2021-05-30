import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { baseUrl } from "../api/apiUrls";
import {
  unCompletedtodosState,
  completedTodosState,
  staticCompletedTodosState,
  staticUnCompletedtodosState,
  pageNumberState,
  activePageState,
  userState,
} from "../recoil/state";
import Router from "../routing/Router";
import { ThemeProvider } from "@theme-ui/theme-provider";
import { mainTheme } from "../themes/mainTheme";
import MainTemplate from "../templates/MainTemplate";

const Root = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    axios
      .post(
        "https://gorest.co.in/public-api/users",
        {
          user_id: user,
          email: "name@o2.pl",
          name: "Testowy User",
          gender: "Male",
          status: "Active",
        },
        {
          headers: {
            Authorization:
              "Bearer 110cff21757d0e9d9e2b50d488826d283df916eaa90fd8421fe5bd8fe7caae18",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [user]);

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

  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const [activePage, setActivePage] = useRecoilState(activePageState);

  useEffect(() => {
    getTodosFromApi();
  }, [activePage]);

  const getTodosFromApi = () => {
    axios
      .get(`https://gorest.co.in/public-api/todos?page=${activePage}`)
      .then((res) => {
        console.log(res);

        const tempUnCompletedTodos = res.data.data.filter(
          (item) => item.completed === false
        );
        const tempCompletedTodos = res.data.data.filter(
          (item) => item.completed === true
        );
        setPageNumber(res.data.meta.pagination.pages);
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
