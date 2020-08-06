import React from "react";
import ReactDOM from "react-dom";
// import * as Minesweeper from "./../../minesweeper";
import Game from "./../components/game";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Game />, root);
})
    // 