import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Bot from "./Bot"




ReactDOM.render(
<BrowserRouter>
  <ScrollToTop/>
      <App />
      <Bot />
 
  </BrowserRouter>,
  document.getElementById("root")
);