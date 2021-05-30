import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
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
        "@media screen and (max-width: 40em)": {
          width: "60px",
        },
      }}
    >
      <div
        sx={{
          backgroundColor: mainTheme.colors.navbarBg,
          width: "90px",
          height: "90vh",
          paddingTop: "36px",
          justifyContent: "center",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
          "@media screen and (max-width: 1300px)": {
            width: "80px",
            height: "auto",
          },
          "@media screen and (max-width: 1100px)": {
            width: "50px",
            height: "auto",
          },
          "@media screen and (max-width: 950px)": {
            width: "40px",
            height: "auto",
          },
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
              "@media screen and (max-width: 750px)": {
                fontSize: "32px",
              },
              "@media screen and (max-width: 1100px)": {
                fontSize: "34px",
              },
            }}
            icon={faHome}
            size="3x"
          />
        </div>

        <Tippy
          sx={{
            backgroundColor: mainTheme.colors.mainPanelBg,
            color: mainTheme.colors.fontColor,
            borderRadius: "5px",
            width: "70px",
            height: "30px",
            fontSize: "12px",
            transition: ".25s all ease",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Montserrat",
          }}
          content="Add task"
        >
          <div
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
            }}
          >
            <FontAwesomeIcon
              sx={{
                color: "#330099",
                cursor: "pointer",
                "@media screen and (max-width: 750px)": {
                  fontSize: "32px",
                },
                "@media screen and (max-width: 1100px)": {
                  fontSize: "34px",
                },
              }}
              icon={faPlusSquare}
              size="3x"
              onClick={() => setIsAddNewTodoModalOpen(true)}
            />
          </div>
        </Tippy>

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
              "@media screen and (max-width: 750px)": {
                fontSize: "32px",
              },
              "@media screen and (max-width: 1100px)": {
                fontSize: "34px",
              },
            }}
            icon={faUser}
            size="4x"
          />
          <FontAwesomeIcon
            sx={{
              backgroundColor: mainTheme.colors.navbarBg,
              color: "#fff",
              justifyContent: "center",
              marginBottom: "10px",
              padding: "4px",
              "@media screen and (max-width: 750px)": {
                fontSize: "32px",
              },
              "@media screen and (max-width: 1100px)": {
                fontSize: "34px",
              },
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
              "@media screen and (max-width: 750px)": {
                fontSize: "32px",
              },
              "@media screen and (max-width: 1100px)": {
                fontSize: "34px",
              },
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
              "@media screen and (max-width: 750px)": {
                fontSize: "32px",
              },
              "@media screen and (max-width: 1100px)": {
                fontSize: "34px",
              },
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
          "@media screen and (max-width: 1300px)": {
            width: "170px",
          },
          "@media screen and (max-width: 1100px)": {
            width: "100px",
          },
          "@media screen and (max-width: 750px)": {
            width: "70px",
          },
        }}
      >
        <h3
          sx={{
            marginBottom: "16px",
            "@media screen and (max-width: 1300px)": {
              fontSize: "18px",
            },
            "@media screen and (max-width: 750px)": {
              fontSize: "12px",
            },
          }}
        >
          My Tasks
        </h3>

        <ul>
          <Tippy
            sx={{
              backgroundColor: mainTheme.colors.mainPanelBg,
              color: mainTheme.colors.fontColor,
              borderRadius: "5px",
              width: "70px",
              height: "30px",
              fontSize: "12px",
              transition: ".25s all ease",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "120px",
              fontFamily: "Montserrat",
            }}
            content="Change"
          >
            <li sx={{ marginBottom: "20px", fontSize: "18px" }}>
              <Link
                to={routes.home}
                sx={{
                  textDecoration: "none",
                  color: mainTheme.colors.fontColor,
                  "@media screen and (max-width: 1200px)": {
                    fontSize: "10px",
                  },
                  "@media screen and (max-width: 750px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Uncompleted todos
                <FontAwesomeIcon
                  icon={faClipboardList}
                  size="1x"
                  sx={{
                    marginLeft: "10px",
                    "@media screen and (max-width: 1200px)": {
                      fontSize: "15px",
                    },
                    "@media screen and (max-width: 750px)": {
                      fontSize: "20px",
                    },
                  }}
                />
              </Link>
            </li>
          </Tippy>

          <Tippy
            sx={{
              backgroundColor: mainTheme.colors.mainPanelBg,
              color: mainTheme.colors.fontColor,
              borderRadius: "5px",
              width: "70px",
              height: "30px",
              fontSize: "12px",
              transition: ".25s all ease",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "120px",
              marginTop: "88px",
              fontFamily: "Montserrat",
            }}
            content="Change"
          >
            <li>
              <Link
                to={routes.completed}
                sx={{
                  textDecoration: "none",
                  color: mainTheme.colors.fontColor,
                  "@media screen and (max-width: 1200px)": {
                    fontSize: "10px",
                  },
                  "@media screen and (max-width: 750px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Completed todos
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  size="1x"
                  sx={{
                    marginLeft: "10px",
                    "@media screen and (max-width: 1200px)": {
                      fontSize: "18px",
                    },
                    "@media screen and (max-width: 750px)": {
                      fontSize: "20px",
                    },
                  }}
                />
              </Link>
            </li>
          </Tippy>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
