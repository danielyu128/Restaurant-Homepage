import homepageLogo from "./assets/crimson_homepage.jpg";

export default function loadHome() {

    const home = document.createElement("div");
    home.classList.add("home");

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

    innerContainer1.append(leftSideMedia, rightSideMedia);
    home.append(innerContainer1);


    const innerContainer2 = document.createElement("div");
    innerContainer2.classList.add("innerContainer2");


    const topSideMedia = document.createElement("div");
    topSideMedia.classList.add("topSideMedia");

    const philosophyTitle = document.createElement("div");
    philosophyTitle.classList.add("philosophyTitle");

    const motto = document.createElement("div");
    motto.classList.add("motto");

    const bottomSideMedia = document.createElement("div");
    bottomSideMedia.classList.add("bottomSideMedia");

    const card1 = document.createElement("div");
    card1.classList.add("card1");

    const card1Img = document.createElement("img");
    card1Img.classList.add("card1Img");

    const card1Motto = document.createElement("div");
    card1Motto.classList.add("card1Motto");

    const card1Paragraph = document.createElement("div");
    card1Paragraph.classList.add("card1Paragraph");


    const card2 = document.createElement("div");
    card2.classList.add("card2");

    const card2Img = document.createElement("img");
    card2Img.classList.add("card2Img");

    const card2Motto = document.createElement("div");
    card2Motto.classList.add("card2Motto");

    const card2Paragraph = document.createElement("div");
    card2Paragraph.classList.add("card2Paragraph");


    const card3 = document.createElement("div");
    card3.classList.add("card3");

    const card3Img = document.createElement("img");
    card3Img.classList.add("card3Img");

    const card3Motto = document.createElement("div");
    card3Motto.classList.add("card3Motto");

    const card3Paragraph = document.createElement("div");
    card3Paragraph.classList.add("card3Paragraph");


    return { home, viewMenuButton };
}