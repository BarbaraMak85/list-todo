import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { mainTheme } from "../../themes/mainTheme";
/** @jsxImportSource theme-ui */

import { useRecoilState, useRecoilValue } from "recoil";
import {
  isAddNewTodoModalOpenState,
  unCompletedtodosState,
  userId,
} from "../../recoil/state";
import axios from "axios";
/** @jsxImportSource theme-ui */

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    width: "40vw",
    height: "60vh",
    borderRadius: "40px",
  },
}));

const AddNewTodo = () => {
  const classes = useStyles();

  const [isAddNewTodoModalOpen, setIsAddNewTodoModalOpen] = useRecoilState(
    isAddNewTodoModalOpenState
  );

  const [unCompletedTodos, setUnCompletedTodos] = useRecoilState(
    unCompletedtodosState
  );
  const [defaultUserId, setDefaultUserId] = useRecoilState(userId);

  const handleAddNewTodoForm = (e) => {
    console.log(defaultUserId);
    e.preventDefault();

    const todoTitle = e.target.todoTitle.value;
    const todoId = Math.floor(Math.random() * 10000);

    const newTodo = {
      completed: false,
      created_at: new Date(),
      title: todoTitle,
      updated_at: new Date(),
      user_id: defaultUserId,
    };

    axios
      .post(
        "https://gorest.co.in/public-api/todos",
        { ...newTodo },
        {
          headers: {
            Authorization:
              "Bearer 110cff21757d0e9d9e2b50d488826d283df916eaa90fd8421fe5bd8fe7caae18",
          },
        }
      )
      .then((res) => {
        newTodo.id = res.data.data.id;
        setUnCompletedTodos([...unCompletedTodos, newTodo]);
        setIsAddNewTodoModalOpen(false);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isAddNewTodoModalOpen}
      onClose={() => setIsAddNewTodoModalOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isAddNewTodoModalOpen}>
        <div className={classes.paper}>
          <h2
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            Add new todo
          </h2>
          <form
            onSubmit={handleAddNewTodoForm}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea
              name="todoTitle"
              sx={{
                resize: "none",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                padding: "14px",
                outline: "none",
              }}
              cols="30"
              rows="12"
            />
            <button
              type="submit"
              sx={{
                marginTop: "10px",
                width: "84px",
                height: "24px",
                borderRadius: "5px",
                border: "1px",
                outline: "none",
                backgroundColor: mainTheme.colors.checkIcon,
                fontFamily: "Montserrat",
              }}
            >
              Add
            </button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddNewTodo;
