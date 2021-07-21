import React, { useState, useCallback, useContext, useEffect } from "react";
import classes from "./ToDo.module.css";
import Button from "../../UI/button/Button";
import ToDoList from "../ToDoList/ToDoList";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";

let notification;

const ToDo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [toDoData, setToDoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:44337/api/mongotodos")
      .then((response) => {
        setToDoData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const buttonHandler = () => {
    if (inputValue.length !== 0) {
      const updatedItems = [];
      const updatedItem = {
        id: 0,
        todoData: inputValue,
        isCompleted: false,
      };
      axios
        .post("https://localhost:44337/api/mongotodos", {
          todoData: inputValue,
          iscompleted: false,
        })
        .then((response) => {
          console.log(response.data)
          updatedItems.push({...updatedItem,id:response.data.id});
          setToDoData((prevItems) => [...prevItems, ...updatedItems]);
          setInputValue("");
        })
        .catch((err) => console.log(err.message));
    }
  };

  const removeItemHandler = (id) => {
    console.log(id);
    axios
      .delete(`https://localhost:44337/api/mongotodos/${id}`)
      .then((response) => {
        const updatedData = toDoData.filter((item) => item.id !== id);
        setToDoData(updatedData);
      })
      .catch((err) => console.log(err.message));
  };

  const markCompleteHandler = useCallback(
    (id) => {
      const currentData = toDoData.filter((item) => item.id === id);
      if (currentData[0].isCompleted === false) {
        console.log(id);
        const mainData = toDoData.slice();
        const updatedData = { ...currentData[0], isCompleted: true };
        console.log("updatedData", updatedData);
        axios
          .put(`https://localhost:44337/api/mongotodos/${id}`, updatedData)
          .then((response) => {
            // console.log(response.data);
            // mainData[index] = { ...updatedData };
            // setToDoData(mainData);
            setToDoData( toDoData.map(todo=> todo.id===id?{...updatedData}:todo))
          })
          .catch((err) => console.log(err));
      } else {
        openModal();
        Notification.requestPermission();
      }
   




    },
    [setToDoData, toDoData]
  );

  const openModal = () => {
    setShowModal(true);
    var options = {
      body: "you have already completed this task",
      icon: "./assets/todo.jpg",
      dir: "ltr",
    };

    notification = new Notification("TODO Notification!", options);
  };

  // navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`);
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Notification with ServiceWorker");
      });
    }
  });

  const closeModal = () => {
    setShowModal(false);
    notification.close();
  };

  return (
    <React.Fragment>
      {showModal ? (
        <Modal show={showModal} closeModal={closeModal}>
          You have already completed this to-do!
        </Modal>
      ) : null}
      <div className={classes.todo}>
        <h1>TODO APP</h1>
        <input
          value={inputValue}
          placeholder={"Please enter your to-do"}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <div style={{ margin: "auto", width: "10%" }}>
          <Button onButtonHandler={buttonHandler} btnType="Success">
            ADD
          </Button>
        </div>
        <ToDoList
          toDoItems={toDoData}
          onRemoveItems={removeItemHandler}
          markComplete={markCompleteHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default ToDo;
