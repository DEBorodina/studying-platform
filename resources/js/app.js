import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StartingPage from "./Pages/StartingPage/StartingPage";

import { Router } from "./Routes/Routes";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </React.StrictMode>,
    root
);
