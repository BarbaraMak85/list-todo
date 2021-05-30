import React from "react";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";
import { mainTheme } from "../themes/mainTheme";
/** @jsxImportSource theme-ui */

const MainTemplate = ({ children }) => {
  return (
    <div
      sx={{
        backgroundColor: mainTheme.colors.mainBg,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: mainTheme.fontFamilies.mainFont,
      }}
    >
      <div
        sx={{
          width: "90vw",
          height: "90vh",
          backgroundColor: mainTheme.colors.mainPanelBg,
          margin: "auto",
          borderRadius: "40px",
          display: "grid",
          gridTemplateColumns: "0.30fr 1fr",
          "@media screen and (max-width: 750px)": {
            height: "94vh",
          },
        }}
      >
        <AddNewTodo />
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
