// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadHeader from "./header.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";


console.log(greeting);

const content = document.querySelector("#content");

const {header,homeButton,menuButton,aboutButton,bookTableButton} = loadHeader();

document.body.prepend(header);

const {home, viewMenuButton} = loadHome();
const {menuPage} = loadMenu();


content.append(home);

homeButton.addEventListener("click",()=>{
    clearContent();
    content.append(home);

});

menuButton.addEventListener("click",()=>{
    clearContent();
    content.append(menuPage);
});



function clearContent(){

    content.textContent = "";

}
