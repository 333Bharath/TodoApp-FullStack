import React, { useContext } from "react";
import classes from "./Auth.module.css";
import Button from "../../UI/button/Button";
import { AuthContext } from "../../context/auth-context";

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  const buttonHandler = () => {
    authContext.login();
  };

  return (
    <div className={classes.auth}>
      <h2>You are not authenticated!</h2>
      <p>Please log in to continue.</p>
      <Button btnType={"Success"} onButtonHandler={buttonHandler}>
        LogIn
      </Button>
    </div>
  );
};

export default Auth;
