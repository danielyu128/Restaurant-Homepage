export default function loadMenu() {


    //Making the menu page
    const menuPage = document.createElement("div");
    menuPage.classList.add("menuPage");

    //Making the menu header
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menuHeader");

    const ourMenu = document.createElement("div");
    ourMenu.classList.add("ourMenu");
    ourMenu.textContent = "Our Menu";

    const menuMotto = document.createElement("div");
    menuMotto.classList.add("menuMotto");
    menuMotto.textContent = "Experience a symphony of flavors crafted with passion and the finest seasonal ingredients.";

    //Adding menu header to page
    menuHeader.append(ourMenu, menuMotto);
    menuPage.append(menuHeader);



    //Main area of menu page
    const menuDishes = document.createElement("div");
    menuDishes.classList.add("menuDishes");


    
    //Small plates section
    const smallPlates = document.createElement("div");
    smallPlates.classList.add("smallPlates");

    const smallPlatesTitle = document.createElement("div");
    smallPlatesTitle.classList.add("smallPlatesTitle");
    smallPlatesTitle.textContent = "Small Plates";

    //Div that consists of the four items in this section
    const smallPlatesItems = document.createElement("div");
    smallPlatesItems.classList.add("smallPlatesItems");

    //Item 1
    const smallPlatesItem1 = document.createElement("div");
    smallPlatesItem1.classList.add("smallPlatesItem1");

    //First div that contains the name and the price of the dish
    const smallPlatesItem1NamePrice = document.createElement("div");
    smallPlatesItem1NamePrice.classList.add("smallPlatesItem1NamePrice");

    const smallPlatesItem1Name = document.createElement("div");
    smallPlatesItem1Name.classList.add("smallPlatesItem1Name");

    const smallPlatesItem1Price = document.createElement("div");
    smallPlatesItem1Price.classList.add("smallPlatesItem1Price");

    //Div that contains the bio
    const smallPlatesItem1Info = document.createElement("div");
    smallPlatesItem1Info.classList.add("smallPlatesItem1Info");

    //Div that contains the dietary restrictions
    const smallPlatesItem1Dietary = document.createElement("div");
    smallPlatesItem1Dietary.classList.add("smallPlatesItem1Dietary");


    //Item 2
    const smallPlatesItem2 = document.createElement("div");
    smallPlatesItem2.classList.add("smallPlatesItem2");

    //First div that contains the name and the price of the dish
    const smallPlatesItem2NamePrice = document.createElement("div");
    smallPlatesItem2NamePrice.classList.add("smallPlatesItem2NamePrice");

    const smallPlatesItem2Name = document.createElement("div");
    smallPlatesItem2Name.classList.add("smallPlatesItem2Name");

    const smallPlatesItem2Price = document.createElement("div");
    smallPlatesItem2Price.classList.add("smallPlatesItem2Price");

    //Div that contains the bio
    const smallPlatesItem2Info = document.createElement("div");
    smallPlatesItem2Info.classList.add("smallPlatesItem2Info");

    //Div that contains the dietary restrictions
    const smallPlatesItem2Dietary = document.createElement("div");
    smallPlatesItem2Dietary.classList.add("smallPlatesItem2Dietary");



    //Item 3
    const smallPlatesItem3 = document.createElement("div");
    smallPlatesItem3.classList.add("smallPlatesItem3");

    //First div that contains the name and the price of the dish
    const smallPlatesItem3NamePrice = document.createElement("div");
    smallPlatesItem3NamePrice.classList.add("smallPlatesItem3NamePrice");

    const smallPlatesItem3Name = document.createElement("div");
    smallPlatesItem3Name.classList.add("smallPlatesItem3Name");

    const smallPlatesItem3Price = document.createElement("div");
    smallPlatesItem3Price.classList.add("smallPlatesItem3Price");

    //Div that contains the bio
    const smallPlatesItem3Info = document.createElement("div");
    smallPlatesItem3Info.classList.add("smallPlatesItem3Info");

    //Div that contains the dietary restrictions
    const smallPlatesItem3Dietary = document.createElement("div");
    smallPlatesItem3Dietary.classList.add("smallPlatesItem3Dietary");


    //Item 4
    const smallPlatesItem4 = document.createElement("div");
    smallPlatesItem4.classList.add("smallPlatesItem4");

    //First div that contains the name and the price of the dish
    const smallPlatesItem4NamePrice = document.createElement("div");
    smallPlatesItem4NamePrice.classList.add("smallPlatesItem4NamePrice");

    const smallPlatesItem4Name = document.createElement("div");
    smallPlatesItem4Name.classList.add("smallPlatesItem4Name");

    const smallPlatesItem4Price = document.createElement("div");
    smallPlatesItem4Price.classList.add("smallPlatesItem4Price");

    //Div that contains the bio
    const smallPlatesItem4Info = document.createElement("div");
    smallPlatesItem4Info.classList.add("smallPlatesItem4Info");

    //Div that contains the dietary restrictions
    const smallPlatesItem4Dietary = document.createElement("div");
    smallPlatesItem4Dietary.classList.add("smallPlatesItem4Dietary");



    //Main courses section


    const mainCourses = document.createElement("div");
    mainCourses.classList.add("mainCourses");

    const mainCoursesTitle = document.createElement("div");
    mainCoursesTitle.classList.add("mainCoursesTitle");
    mainCoursesTitle.textContent = "Main Courses";

    //Div that consists of the four items in this section
    const mainCoursesItems = document.createElement("div");
    mainCoursesItems.classList.add("mainCoursesItems");

    //Item 1
    const mainCoursesItem1 = document.createElement("div");
    mainCoursesItem1.classList.add("mainCoursesItem1");

    //First div that contains the name and the price of the dish
    const mainCoursesItem1NamePrice = document.createElement("div");
    mainCoursesItem1NamePrice.classList.add("mainCoursesItem1NamePrice");

    const mainCoursesItem1Name = document.createElement("div");
    mainCoursesItem1Name.classList.add("mainCoursesItem1Name");

    const mainCoursesItem1Price = document.createElement("div");
    mainCoursesItem1Price.classList.add("mainCoursesItem1Price");

    //Div that contains the bio
    const mainCoursesItem1Info = document.createElement("div");
    mainCoursesItem1Info.classList.add("mainCoursesItem1Info");

    //Div that contains the dietary restrictions
    const mainCoursesItem1Dietary = document.createElement("div");
    mainCoursesItem1Dietary.classList.add("mainCoursesItem1Dietary");


    //Item 2
    const mainCoursesItem2 = document.createElement("div");
    mainCoursesItem2.classList.add("mainCoursesItem2");

    //First div that contains the name and the price of the dish
    const mainCoursesItem2NamePrice = document.createElement("div");
    mainCoursesItem2NamePrice.classList.add("mainCoursesItem2NamePrice");

    const mainCoursesItem2Name = document.createElement("div");
    mainCoursesItem2Name.classList.add("mainCoursesItem2Name");

    const mainCoursesItem2Price = document.createElement("div");
    mainCoursesItem2Price.classList.add("mainCoursesItem2Price");

    //Div that contains the bio
    const mainCoursesItem2Info = document.createElement("div");
    mainCoursesItem2Info.classList.add("mainCoursesItem2Info");

    //Div that contains the dietary restrictions
    const mainCoursesItem2Dietary = document.createElement("div");
    mainCoursesItem2Dietary.classList.add("mainCoursesItem2Dietary");



    //Item 3
    const mainCoursesItem3 = document.createElement("div");
    mainCoursesItem3.classList.add("mainCoursesItem3");

    //First div that contains the name and the price of the dish
    const mainCoursesItem3NamePrice = document.createElement("div");
    mainCoursesItem3NamePrice.classList.add("mainCoursesItem3NamePrice");

    const mainCoursesItem3Name = document.createElement("div");
    mainCoursesItem3Name.classList.add("mainCoursesItem3Name");

    const mainCoursesItem3Price = document.createElement("div");
    mainCoursesItem3Price.classList.add("mainCoursesItem3Price");

    //Div that contains the bio
    const mainCoursesItem3Info = document.createElement("div");
    mainCoursesItem3Info.classList.add("mainCoursesItem3Info");

    //Div that contains the dietary restrictions
    const mainCoursesItem3Dietary = document.createElement("div");
    mainCoursesItem3Dietary.classList.add("mainCoursesItem3Dietary");


    //Item 4
    const mainCoursesItem4 = document.createElement("div");
    mainCoursesItem4.classList.add("mainCoursesItem4");

    //First div that contains the name and the price of the dish
    const mainCoursesItem4NamePrice = document.createElement("div");
    mainCoursesItem4NamePrice.classList.add("mainCoursesItem4NamePrice");

    const mainCoursesItem4Name = document.createElement("div");
    mainCoursesItem4Name.classList.add("mainCoursesItem4Name");

    const mainCoursesItem4Price = document.createElement("div");
    mainCoursesItem4Price.classList.add("mainCoursesItem4Price");

    //Div that contains the bio
    const mainCoursesItem4Info = document.createElement("div");
    mainCoursesItem4Info.classList.add("mainCoursesItem4Info");

    //Div that contains the dietary restrictions
    const mainCoursesItem4Dietary = document.createElement("div");
    mainCoursesItem4Dietary.classList.add("mainCoursesItem4Dietary");









    const refreshments = document.createElement("div");
    refreshments.classList.add("refreshments");




    return { menuPage };
}