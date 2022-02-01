import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Privacy from "./Privacy";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
