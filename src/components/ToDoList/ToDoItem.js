import React from "react";
import classes from "./ToDoItem.module.css";
import Button from "../../UI/button/Button";
//import Checkbox from "../../UI/checkbox/Checkbox";
// import { Checkbox } from "pretty-checkbox-react";

import { green,grey } from '@material-ui/core/colors';
import { Checkbox } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const ToDoItem = (props) => {
  return (
    <div className={classes.toDoItem}>
      <div className={classes.left}>
        {/* <Checkbox
          completed={props.completed}
          markCompleted={props.markCompleted}
        /> */}
        {/* <Checkbox checked={props.completed} onChange={props.markCompleted} /> */}
        <FormGroup>
        <FormControlLabel
        control={<PurpleSwitch checked={props.completed} 
        onChange={props.markCompleted} name="checked" />}
        label=""
      />
          {/* <FormControlLabel
            control={
              <Switch
                checked={props.completed}
                onChange={props.markCompleted}
                value=""
                color=""
              />
            }
            //  label="Completed"
          /> */}
        {/* <FormControlLabel
        control={<GreenCheckbox checked={props.completed}
         onChange={props.markCompleted} name="" />}
        label=""
      /> */}
        </FormGroup>
        {/* <input
          type="checkbox"
          checked={props.completed}
          onChange={props.markCompleted}
        /> */}
      </div>
      <div className={classes.middle}>{props.children}</div>
      <div className={classes.right}>
        <Button onButtonHandler={props.onRemoveItems} btnType="Danger">
          Delete
        </Button>
      </div>
      {/* <div style="clear:both"></div> */}
    </div>
  );
};

export default ToDoItem;
