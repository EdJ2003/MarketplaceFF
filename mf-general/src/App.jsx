import React from "react";
import ReactDOM from "react-dom";
import Products from "./components/Products";
import "./index.css";

const App = () => (
  <Products />
);
ReactDOM.render(<App />, document.getElementById("app"));
