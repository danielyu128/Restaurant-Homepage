// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadHeader from "./header.js";

console.log(greeting);

const content = document.querySelector("#content");
const {header,homeButton,menuButton,aboutButton,bookTableButton} = loadHeader();

document.body.prepend(header);

