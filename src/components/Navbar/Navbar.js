import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "theme-ui";
import { mainTheme } from "../../themes/mainTheme";
/** @jsxImportSource theme-ui */

import {
  faPlusSquare,
  faHome,
  faClipboardList,
  faClipboardCheck,
  faUser,
  faClock,
  faListAlt,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { isAddNewTodoModalOpenState } from "../../recoil/state";

const Navbar = () => {
  const [isAddNewTodoModalOpen, setIsAddNewTodoModalOpen] = useRecoilState(
    isAddNewTodoModalOpenState
  );

  return (
    <div
      sx={{
        backgroundColor: mainTheme.colors.navbarBg,
        width: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderTopLeftRadius: "40px",
        borderBottomLeftRadius: "40px",
        textAlign: "center",
      }}
    >
      <div
        sx={{
          backgroundColor: mainTheme.colors.navbarBg,
          width: "80px",
          height: "90vh",
          paddingTop: "36px",
          justifyContent: "center",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}
      >
        <div>
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: mainTheme.colors.checkIcon,
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
            }}
            icon={faHome}
            size="3x"
          />
        </div>
        <div
          sx={{
            backgroundColor: mainTheme.colors.navbarBg,
          }}
        >
          <FontAwesomeIcon
            sx={{
              color: "#330099",
              cursor: "pointer",
            }}
            icon={faPlusSquare}
            size="3x"
            onClick={() => setIsAddNewTodoModalOpen(true)}
          />
        </div>
        <div
          sx={{
            paddingBottom: "70px",
          }}
        >
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: "#fff",
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
            }}
            icon={faUser}
            size="3x"
          />
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: "#fff",
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
            }}
            icon={faClock}
            size="3x"
          />
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: "#fff",
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
            }}
            icon={faListAlt}
            size="3x"
          />
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: "#fff",
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
            }}
            icon={faHistory}
            size="3x"
          />
        </div>
      </div>

      <nav
        sx={{
          backgroundColor: mainTheme.colors.navbarSecendary,
          width: "190px",
          paddingTop: "36px",
        }}
      >
        <h3 sx={{ marginBottom: "16px" }}>My Tasks</h3>

        <ul>
          <li sx={{ marginBottom: "20px" }}>
            <Link
              to={routes.home}
              sx={{ textDecoration: "none", color: mainTheme.colors.fontColor }}
            >
              Uncompleted todos
              <FontAwesomeIcon
                icon={faClipboardList}
                size="1x"
                sx={{ marginLeft: "10px" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to={routes.completed}
              sx={{ textDecoration: "none", color: mainTheme.colors.fontColor }}
            >
              Completed todos
              <FontAwesomeIcon
                icon={faClipboardCheck}
                size="1x"
                sx={{ marginLeft: "10px" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
