import React from "react";
import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  console.log(props.toDoItems);
  return (
    <div className={classes.toDoList}>
      {props.toDoItems.map((toDoItem,index) => (
        <ToDoItem
          key={toDoItem.id}
          completed={toDoItem.isCompleted}
          onRemoveItems={props.onRemoveItems.bind(this, toDoItem.id)}
          markCompleted={props.markComplete.bind(this,toDoItem.id,index)}
        >
          {toDoItem.todoData}
        </ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
