import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthProvider = (props) => {
  const [authenticated, setAutheticated] = useState(false);

  const loginHandler = () => {
    setAutheticated(true);
  };

  return (
    <AuthContext.Provider
      value={{isAuth : authenticated, login : loginHandler}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
