import React from "react";
import { render } from "react-snapshot";
import { App } from "./app/App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

render(<App />, document.getElementById("root"));
