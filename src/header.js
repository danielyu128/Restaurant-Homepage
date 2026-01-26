export default function loadHeader(){

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const homeButton = document.querySelector(".b1");
    const menuButton = document.querySelector(".b2");
    const aboutButton = document.querySelector(".b3");
    const bookTableButton = document.querySelector(".b4");
    
    const restaurantTitle = document.createElement("div");
    restaurantTitle.textContent = "The Crimson Fork";

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";
    bookTableButton.textContent = "Book a table"
    
    restaurantTitle.classList.add("title");

    nav.append(homeButton,menuButton,aboutButton);
    header.append(restaurantTitle,nav,bookTableButton);


    return {header,homeButton,menuButton,aboutButton,bookTableButton};

}