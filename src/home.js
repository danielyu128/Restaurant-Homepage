import homepageLogo from "./assets/crimson_homepage.jpg";
import farmLogo from "./assets/farm.png";
import sustainable from "./assets/sustainable.svg";
import book from "./assets/book.png";

export default function loadHome() {

    //Main div that encompases everything for this page
    const home = document.createElement("div");
    home.classList.add("home");

    //Code for the first inner container of the home page
    const innerContainer1 = document.createElement("div");
    innerContainer1.classList.add("innerContainer1");

    const leftSideMedia = document.createElement("div");
    leftSideMedia.classList.add("leftSideMedia");

    const rightSideMedia = document.createElement("img");
    rightSideMedia.src = homepageLogo;
    rightSideMedia.classList.add("logo");

    const establishDate = document.createElement("div");
    establishDate.textContent = "Established in Toronto in 2022."
    establishDate.classList.add("establishDate");

    const restaurantName = document.createElement("div");
    restaurantName.textContent = "The Crimson Fork";
    restaurantName.classList.add("restaurantName");

    const slogan = document.createElement("div");
    slogan.textContent = "Where Every Bite Tells a Story.";
    slogan.classList.add("slogan");

    const bio = document.createElement("div");
    bio.textContent = "At The Crimson Fork, we believe dining is an experience, not just a meal. Nestled in the heart of Toronto, our restaurant combines bold flavors, artful presentation, and a warm, inviting atmosphere. From handcrafted dishes to carefully curated drinks, every detail is designed to delight your senses. Whether it’s a casual lunch, a celebratory dinner, or a night out with friends, The Crimson Fork is where memorable moments—and unforgettable flavors—come together."
    bio.classList.add("bio");

    const bookAndViewContainer = document.createElement("div");
    bookAndViewContainer.classList.add("bookAndViewContainer");

    const bookButton = document.createElement("button");
    const viewMenuButton = document.createElement("button");

    bookButton.classList.add("bookButton");
    viewMenuButton.classList.add("viewMenuButton");


    bookButton.textContent = "Book a Table";
    viewMenuButton.textContent = "View Menu";

    bookAndViewContainer.append(bookButton, viewMenuButton);

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footerContainer");


    const locallySourcedSlogan = document.createElement("div");
    const seasonalMenuSlogan = document.createElement("div");

    locallySourcedSlogan.textContent = "Locally Sourced";
    seasonalMenuSlogan.textContent = "Seasonal Menu";

    locallySourcedSlogan.classList.add("locallySourcedSlogan");
    seasonalMenuSlogan.classList.add("seasonalMenuSlogan");


    footerContainer.append(locallySourcedSlogan, seasonalMenuSlogan);

    leftSideMedia.append(establishDate, restaurantName, slogan, bio, bookAndViewContainer, footerContainer);


    //Adding the first inner container to the page

    innerContainer1.append(leftSideMedia, rightSideMedia);
    home.append(innerContainer1);



    //Second inner container of the main home page

    const innerContainer2 = document.createElement("div");
    innerContainer2.classList.add("innerContainer2");


    const topSideMedia = document.createElement("div");
    topSideMedia.classList.add("topSideMedia");

    const philosophyTitle = document.createElement("div");
    philosophyTitle.classList.add("philosophyTitle");
    philosophyTitle.textContent = "Our Philosophy";

    const motto = document.createElement("div");
    motto.classList.add("motto");
    motto.textContent = "The Crimson Fork is where flavor, atmosphere, and story come together.";

    topSideMedia.append(philosophyTitle, motto);

    const bottomSideMedia = document.createElement("div");
    bottomSideMedia.classList.add("bottomSideMedia");


    //The structure for the 3 cards of the website

    //Card 1

    const card1 = document.createElement("div");
    card1.classList.add("card1");


    //Card 1 components
    const card1Img = document.createElement("img");
    card1Img.classList.add("card1Img");
    card1Img.src = farmLogo;

    const card1Motto = document.createElement("div");
    card1Motto.classList.add("card1Motto");
    card1Motto.textContent = "Farm Fresh";

    const card1Paragraph = document.createElement("div");
    card1Paragraph.classList.add("card1Paragraph");
    card1Paragraph.textContent = "Sourced daily from local growers to ensure the highest nutrient content and best flavor.";

    card1.append(card1Img, card1Motto, card1Paragraph);

    //Card 2

    const card2 = document.createElement("div");
    card2.classList.add("card2");


    //Card 2 components
    const card2Img = document.createElement("img");
    card2Img.classList.add("card2Img");
    card2Img.src = sustainable;

    const card2Motto = document.createElement("div");
    card2Motto.classList.add("card2Motto");
    card2Motto.textContent = "Sustainable";

    const card2Paragraph = document.createElement("div");
    card2Paragraph.classList.add("card2Paragraph");
    card2Paragraph.textContent = "Eco-friendly practices in every step of our process, from sourcing to waste management.";

    card2.append(card2Img, card2Motto, card2Paragraph);


    //Card 3

    const card3 = document.createElement("div");
    card3.classList.add("card3");


    //Card 3 components
    const card3Img = document.createElement("img");
    card3Img.classList.add("card3Img");
    card3Img.src = book;

    const card3Motto = document.createElement("div");
    card3Motto.classList.add("card3Motto");
    card3Motto.textContent = "Traditional";

    const card3Paragraph = document.createElement("div");
    card3Paragraph.classList.add("card3Paragraph");
    card3Paragraph.textContent = "Recipes passed down through generations, preserving the authentic taste of our heritage.";

    card3.append(card3Img, card3Motto, card3Paragraph);


    bottomSideMedia.append(card1, card2, card3);

    innerContainer2.append(topSideMedia, bottomSideMedia);

    //Adding second inner container to main home page
    home.append(innerContainer2);



    //Creating third inner container for main page

    const innerContainer3 = document.createElement("div");
    innerContainer3.classList.add("innerContainer3");

    const footerName = document.createElement("div");
    footerName.classList.add("footerName");
    footerName.textContent = "The Crimson Fork";

    const copyright = document.createElement("div");
    copyright.classList.add("copyright");
    copyright.textContent = "@ 2026 The Crimson Fork. All rights reserved.";

    innerContainer3.append(footerName,copyright);

    home.append(innerContainer3);


    return { home, viewMenuButton };
}