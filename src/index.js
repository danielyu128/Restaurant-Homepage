// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadHeader from "./header.js";

console.log(greeting);

const content = document.querySelector("#content");
const {header,homeButton,menuButton,aboutButton} = loadHeader();

document.body.prepend(header);

