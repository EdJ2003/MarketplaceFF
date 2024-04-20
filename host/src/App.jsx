import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./components/Dashboard";

const App = () => (
      <Dashboard />
);
ReactDOM.render(<App />, document.getElementById("app"));
