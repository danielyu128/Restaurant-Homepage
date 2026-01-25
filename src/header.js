export default function loadHeader(){

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const homeButton = document.querySelector(".b1");
    const menuButton = document.querySelector(".b2");
    const aboutButton = document.querySelector(".b3");
    
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";

    nav.append(homeButton,menuButton,aboutButton);
    header.append(nav);
    return {header,homeButton,menuButton,aboutButton};

}