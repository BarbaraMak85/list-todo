import { atom } from "recoil";

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
