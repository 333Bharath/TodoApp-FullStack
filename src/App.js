import React, { useContext } from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import { AuthContext } from "./context/auth-context";
import Auth from "./components/Auth/Auth";


function App() {
  const authContext = useContext(AuthContext);

  let content = <Auth />;

  if (authContext.isAuth) {
    content = (
      <React.Fragment>
        <div className="App">
          <ToDo></ToDo>;
        </div>
      </React.Fragment>
    );
  }

  return content;
}

export default App;
