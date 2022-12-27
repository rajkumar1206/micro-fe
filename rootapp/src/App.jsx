import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "home/App";
import Login from "login/App";
import { mount } from "nav/App";
import { useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   // mount(ref.current) 
  // }, []);
  
  setTimeout(() => {
    mount(ref.current)
  }, 200);

  return (
    <div>
      <h2>Root App</h2>
      <div ref={ref}></div>
      {
        loggedIn ? <Home /> : <Login />
      }
      <button classname="container" onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'logout': 'login'}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
