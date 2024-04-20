import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import UserProfile from "./components/UserProfile";

const App = () => (
  <UserProfile/>
);
ReactDOM.render(<App />, document.getElementById("app"));
