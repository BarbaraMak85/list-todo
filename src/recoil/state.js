import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: 200,
});

export const unCompletedtodosState = atom({
  key: "unCompletedtodosState",
  default: [],
});

export const completedTodosState = atom({
  key: "completedTodosState",
  default: [],
});

export const staticUnCompletedtodosState = atom({
  key: "staticUnCompletedtodosState",
  default: [],
});

export const staticCompletedTodosState = atom({
  key: "staticCompletedTodosState",
  default: [],
});

export const isAddNewTodoModalOpenState = atom({
  key: "isAddNewTodoModalOpenState",
  default: false,
});

export const pageNumberState = atom({
  key: "pageNumberState",
  default: 10,
});

export const activePageState = atom({
  key: "activePageState",
  default: 1,
});
