import React from "react";
import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div className={classes.toDoList}>
      {props.toDoItems.map((toDoItem) => (
        <ToDoItem
          key={toDoItem.id}
          completed={toDoItem.isCompleted}
          onRemoveItems={props.onRemoveItems.bind(this, toDoItem.id)}
          markCompleted={props.markComplete.bind(this, toDoItem.id)}
        >
          {toDoItem.todoData}
        </ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
