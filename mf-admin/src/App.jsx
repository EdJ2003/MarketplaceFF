import React from "react";
import ReactDOM from "react-dom";
import Admintab from "./components/Admintab";
import "./index.css";

const App = () => (
  <div className="container">
  <Admintab />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
