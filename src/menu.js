import drink1 from "./assets/ScarletSpritz.jpg";
import drink2 from "./assets/GardenTonic.jpg";
import drink3 from "./assets/CrimsonBerryIcedTea.jpg";

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
    smallPlatesItem1.classList.add("items");

    //First div that contains the name and the price of the dish
    const smallPlatesItem1NamePrice = document.createElement("div");
    smallPlatesItem1NamePrice.classList.add("namePrice");

    const smallPlatesItem1Name = document.createElement("div");
    smallPlatesItem1Name.classList.add("itemName");
    smallPlatesItem1Name.textContent = "Ember-Roasted Beet Tartare";


    const smallPlatesItem1Price = document.createElement("div");
    smallPlatesItem1Price.classList.add("itemPrice");
    smallPlatesItem1Price.textContent = "$14";

    smallPlatesItem1NamePrice.append(smallPlatesItem1Name, smallPlatesItem1Price);


    //Div that contains the bio
    const smallPlatesItem1Info = document.createElement("div");
    smallPlatesItem1Info.classList.add("itemInfo");
    smallPlatesItem1Info.textContent = "Finely chopped roasted beets, capers, Dijon, shallots, and cold-pressed olive oil, served with grilled sourdough crostini.";


    //Div that contains the dietary restrictions
    const smallPlatesItem1Dietary = document.createElement("div");

    const smallPlatesItem1Dietary1 = document.createElement("div");
    const smallPlatesItem1Dietary2 = document.createElement("div");

    smallPlatesItem1Dietary1.textContent = "Vegetarian";
    smallPlatesItem1Dietary2.textContent = "Gluten Free";

    smallPlatesItem1Dietary1.classList.add("vegetarian");
    smallPlatesItem1Dietary2.classList.add("gF");


    smallPlatesItem1Dietary.classList.add("dietary");
    smallPlatesItem1Dietary.append(smallPlatesItem1Dietary1, smallPlatesItem1Dietary2);

    smallPlatesItem1.append(smallPlatesItem1NamePrice, smallPlatesItem1Info, smallPlatesItem1Dietary);


    //Item 2
    const smallPlatesItem2 = document.createElement("div");
    smallPlatesItem2.classList.add("items");

    //First div that contains the name and the price of the dish
    const smallPlatesItem2NamePrice = document.createElement("div");
    smallPlatesItem2NamePrice.classList.add("namePrice");

    const smallPlatesItem2Name = document.createElement("div");
    smallPlatesItem2Name.classList.add("itemName");
    smallPlatesItem2Name.textContent = "Crimson Calamari";


    const smallPlatesItem2Price = document.createElement("div");
    smallPlatesItem2Price.classList.add("itemPrice");
    smallPlatesItem2Price.textContent = "$17";

    smallPlatesItem2NamePrice.append(smallPlatesItem2Name, smallPlatesItem2Price);



    //Div that contains the bio
    const smallPlatesItem2Info = document.createElement("div");
    smallPlatesItem2Info.classList.add("itemInfo");
    smallPlatesItem2Info.textContent = "Lightly dusted calamari rings, flash-fried and tossed in smoked chili oil, served with lemon aioli.";

    //Div that contains the dietary restrictions
    const smallPlatesItem2Dietary = document.createElement("div");
    smallPlatesItem2Dietary.classList.add("spicy");
    smallPlatesItem2Dietary.textContent = "Spicy";

    smallPlatesItem2.append(smallPlatesItem2NamePrice, smallPlatesItem2Info, smallPlatesItem2Dietary);




    //Item 3
    const smallPlatesItem3 = document.createElement("div");
    smallPlatesItem3.classList.add("items");

    //First div that contains the name and the price of the dish
    const smallPlatesItem3NamePrice = document.createElement("div");
    smallPlatesItem3NamePrice.classList.add("namePrice");

    const smallPlatesItem3Name = document.createElement("div");
    smallPlatesItem3Name.classList.add("itemName");
    smallPlatesItem3Name.textContent = "Heritage Burrata & Fire Tomatoes";


    const smallPlatesItem3Price = document.createElement("div");
    smallPlatesItem3Price.classList.add("itemPrice");
    smallPlatesItem3Price.textContent = "$18";

    smallPlatesItem3NamePrice.append(smallPlatesItem3Name, smallPlatesItem3Price);



    //Div that contains the bio
    const smallPlatesItem3Info = document.createElement("div");
    smallPlatesItem3Info.classList.add("itemInfo");
    smallPlatesItem3Info.textContent = "Creamy burrata paired with blistered heirloom tomatoes, basil oil, and aged balsamic.";


    //Div that contains the dietary restrictions
    //Div that contains the dietary restrictions
    const smallPlatesItem3Dietary = document.createElement("div");

    const smallPlatesItem3Dietary1 = document.createElement("div");
    const smallPlatesItem3Dietary2 = document.createElement("div");

    smallPlatesItem3Dietary1.textContent = "Vegetarian";
    smallPlatesItem3Dietary2.textContent = "Gluten Free";

    smallPlatesItem3Dietary1.classList.add("vegetarian");
    smallPlatesItem3Dietary2.classList.add("gF");


    smallPlatesItem3Dietary.classList.add("dietary");
    smallPlatesItem3Dietary.append(smallPlatesItem3Dietary1, smallPlatesItem3Dietary2);

    smallPlatesItem3.append(smallPlatesItem3NamePrice, smallPlatesItem3Info, smallPlatesItem3Dietary);



    //Item 4
    const smallPlatesItem4 = document.createElement("div");
    smallPlatesItem4.classList.add("items");

    //First div that contains the name and the price of the dish
    const smallPlatesItem4NamePrice = document.createElement("div");
    smallPlatesItem4NamePrice.classList.add("namePrice");

    const smallPlatesItem4Name = document.createElement("div");
    smallPlatesItem4Name.classList.add("itemName");
    smallPlatesItem4Name.textContent = "Braised Short Rib Arancini";


    const smallPlatesItem4Price = document.createElement("div");
    smallPlatesItem4Price.classList.add("itemPrice");
    smallPlatesItem4Price.textContent = "$19";

    smallPlatesItem4NamePrice.append(smallPlatesItem4Name, smallPlatesItem4Price);



    //Div that contains the bio
    const smallPlatesItem4Info = document.createElement("div");
    smallPlatesItem4Info.classList.add("itemInfo");
    smallPlatesItem4Info.textContent = "Crispy risotto balls filled with slow-braised beef short rib and fontina, served with rosemary tomato sauce.";


    //Div that contains the dietary restrictions
    const smallPlatesItem4Dietary = document.createElement("div");
    smallPlatesItem4Dietary.classList.add("dietary");
    smallPlatesItem4Dietary.textContent = "";

    smallPlatesItem4.append(smallPlatesItem4NamePrice, smallPlatesItem4Info, smallPlatesItem4Dietary);


    //Adding the four small dishes to the dish div
    smallPlatesItems.append(smallPlatesItem1, smallPlatesItem2, smallPlatesItem3, smallPlatesItem4);

    //Adding the title plus the dish div to the small plates template
    smallPlates.append(smallPlatesTitle, smallPlatesItems);






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
    mainCoursesItem1.classList.add("items");

    //First div that contains the name and the price of the dish
    const mainCoursesItem1NamePrice = document.createElement("div");
    mainCoursesItem1NamePrice.classList.add("namePrice");

    const mainCoursesItem1Name = document.createElement("div");
    mainCoursesItem1Name.classList.add("itemName");
    mainCoursesItem1Name.textContent = "Maple-Glazed Duck Breast";


    const mainCoursesItem1Price = document.createElement("div");
    mainCoursesItem1Price.classList.add("itemPrice");
    mainCoursesItem1Price.textContent = "$38";

    mainCoursesItem1NamePrice.append(mainCoursesItem1Name, mainCoursesItem1Price);


    //Div that contains the bio
    const mainCoursesItem1Info = document.createElement("div");
    mainCoursesItem1Info.classList.add("itemInfo");
    mainCoursesItem1Info.textContent = "Pan-seared duck breast with maple gastrique, roasted root vegetables, and juniper jus.";


    //Div that contains the dietary restrictions
    const mainCoursesItem1Dietary = document.createElement("div");

    const mainCoursesItem1Dietary1 = document.createElement("div");

    mainCoursesItem1Dietary1.textContent = "Gluten Free";

    mainCoursesItem1Dietary1.classList.add("gF");


    mainCoursesItem1Dietary.classList.add("dietary");
    mainCoursesItem1Dietary.append(mainCoursesItem1Dietary1);



    mainCoursesItem1.append(mainCoursesItem1NamePrice, mainCoursesItem1Info, mainCoursesItem1Dietary);



    //Item 2
    const mainCoursesItem2 = document.createElement("div");
    mainCoursesItem2.classList.add("items");

    //First div that contains the name and the price of the dish
    const mainCoursesItem2NamePrice = document.createElement("div");
    mainCoursesItem2NamePrice.classList.add("namePrice");

    const mainCoursesItem2Name = document.createElement("div");
    mainCoursesItem2Name.classList.add("itemName");
    mainCoursesItem2Name.textContent = "Fire-Kissed Atlantic Salmon";


    const mainCoursesItem2Price = document.createElement("div");
    mainCoursesItem2Price.classList.add("itemPrice");
    mainCoursesItem2Price.textContent = "$34";

    mainCoursesItem2NamePrice.append(mainCoursesItem2Name, mainCoursesItem2Price);


    //Div that contains the bio
    const mainCoursesItem2Info = document.createElement("div");
    mainCoursesItem2Info.classList.add("itemInfo");
    mainCoursesItem2Info.textContent = "Grilled salmon with charred lemon, fennel slaw, and herb-infused quinoa.";


    //Div that contains the dietary restrictions
    const mainCoursesItem2Dietary = document.createElement("div");

    const mainCoursesItem2Dietary1 = document.createElement("div");

    mainCoursesItem2Dietary1.textContent = "Gluten Free";

    mainCoursesItem2Dietary1.classList.add("gF");


    mainCoursesItem2Dietary.classList.add("dietary");
    mainCoursesItem2Dietary.append(mainCoursesItem2Dietary1);




    mainCoursesItem2.append(mainCoursesItem2NamePrice, mainCoursesItem2Info, mainCoursesItem2Dietary);



    //Item 3
    const mainCoursesItem3 = document.createElement("div");
    mainCoursesItem3.classList.add("items");

    //First div that contains the name and the price of the dish
    const mainCoursesItem3NamePrice = document.createElement("div");
    mainCoursesItem3NamePrice.classList.add("namePrice");

    const mainCoursesItem3Name = document.createElement("div");
    mainCoursesItem3Name.classList.add("itemName");
    mainCoursesItem3Name.textContent = "Wild Mushroom Pappardelle";


    const mainCoursesItem3Price = document.createElement("div");
    mainCoursesItem3Price.classList.add("itemPrice");
    mainCoursesItem3Price.textContent = "$29";

    mainCoursesItem3NamePrice.append(mainCoursesItem3Name, mainCoursesItem3Price);



    //Div that contains the bio
    const mainCoursesItem3Info = document.createElement("div");
    mainCoursesItem3Info.classList.add("itemInfo");
    mainCoursesItem3Info.textContent = "Hand-cut pasta tossed with foraged mushrooms, garlic cream, thyme, and aged pecorino.";


    //Div that contains the dietary restrictions
    const mainCoursesItem3Dietary = document.createElement("div");

    const mainCoursesItem3Dietary1 = document.createElement("div");

    mainCoursesItem3Dietary1.textContent = "Vegetarian";

    mainCoursesItem3Dietary1.classList.add("vegetarian");


    mainCoursesItem3Dietary.classList.add("dietary");
    mainCoursesItem3Dietary.append(mainCoursesItem3Dietary1);



    mainCoursesItem3.append(mainCoursesItem3NamePrice, mainCoursesItem3Info, mainCoursesItem3Dietary);



    //Item 4
    const mainCoursesItem4 = document.createElement("div");
    mainCoursesItem4.classList.add("items");

    //First div that contains the name and the price of the dish
    const mainCoursesItem4NamePrice = document.createElement("div");
    mainCoursesItem4NamePrice.classList.add("namePrice");

    const mainCoursesItem4Name = document.createElement("div");
    mainCoursesItem4Name.classList.add("itemName");
    mainCoursesItem4Name.textContent = "Crimson Spice Lamb Shank";


    const mainCoursesItem4Price = document.createElement("div");
    mainCoursesItem4Price.classList.add("itemPrice");
    mainCoursesItem4Price.textContent = "$42";

    mainCoursesItem4NamePrice.append(mainCoursesItem4Name, mainCoursesItem4Price);


    //Div that contains the bio
    const mainCoursesItem4Info = document.createElement("div");
    mainCoursesItem4Info.classList.add("itemInfo");
    mainCoursesItem4Info.textContent = "Slow-braised lamb shank in a rich tomato-chili reduction, served over creamy polenta.";


    //Div that contains the dietary restrictions
    const mainCoursesItem4Dietary = document.createElement("div");

    const mainCoursesItem4Dietary1 = document.createElement("div");
    const mainCoursesItem4Dietary2 = document.createElement("div");

    mainCoursesItem4Dietary1.textContent = "Spicy";
    mainCoursesItem4Dietary2.textContent = "Gluten Free";

    mainCoursesItem4Dietary1.classList.add("spicy");
    mainCoursesItem4Dietary2.classList.add("gF")

    mainCoursesItem4Dietary.classList.add("dietary");
    mainCoursesItem4Dietary.append(mainCoursesItem4Dietary1,mainCoursesItem4Dietary2);




    mainCoursesItem4.append(mainCoursesItem4NamePrice, mainCoursesItem4Info, mainCoursesItem4Dietary);

    //Adding the four main course dishes to the dish div
    mainCoursesItems.append(mainCoursesItem1, mainCoursesItem2, mainCoursesItem3, mainCoursesItem4);

    //Adding the title plus the dish div to the main course plates template
    mainCourses.append(mainCoursesTitle, mainCoursesItems);




    //Refreshments
    const refreshments = document.createElement("div");
    refreshments.classList.add("refreshments");

    const refreshmentsTitle = document.createElement("div");
    refreshmentsTitle.classList.add("refreshmentsTitle");
    refreshmentsTitle.textContent = "Refreshments"

    //Div that holds the restaurants
    const refreshmentsList = document.createElement("div");
    refreshmentsList.classList.add("refreshmentsList");

    //Refreshment 1
    const refreshmentsItem1 = document.createElement("div");
    refreshmentsItem1.classList.add("drinkItems");

    const refreshmentsItem1Img = document.createElement("img");
    refreshmentsItem1Img.classList.add("drinks");
    refreshmentsItem1Img.src = drink1;

    const refreshmentsItem1NamePrice = document.createElement("div");
    refreshmentsItem1NamePrice.classList.add("drinkNamePrice");

    const refreshmentsItem1Name = document.createElement("div");
    refreshmentsItem1Name.classList.add("drinkName");
    refreshmentsItem1Name.textContent = "Scarlet Spritz";


    const refreshmentsItem1Price = document.createElement("div");
    refreshmentsItem1Price.classList.add("itemPrice");
    refreshmentsItem1Price.textContent = "$13";

    refreshmentsItem1NamePrice.append(refreshmentsItem1Name, refreshmentsItem1Price);


    const refreshmentsItem1Info = document.createElement("div");
    refreshmentsItem1Info.classList.add("drinkInfo");
    refreshmentsItem1Info.textContent = "A refreshing blend of blood orange, prosecco, and a splash of soda.";

    refreshmentsItem1.append(refreshmentsItem1Img, refreshmentsItem1NamePrice, refreshmentsItem1Info);


    //Refreshment 2
    const refreshmentsItem2 = document.createElement("div");
    refreshmentsItem2.classList.add("drinkItems");

    const refreshmentsItem2Img = document.createElement("img");
    refreshmentsItem2Img.classList.add("drinks");
    refreshmentsItem2Img.src = drink2;


    const refreshmentsItem2NamePrice = document.createElement("div");
    refreshmentsItem2NamePrice.classList.add("drinkNamePrice");

    const refreshmentsItem2Name = document.createElement("div");
    refreshmentsItem2Name.classList.add("drinkName");
    refreshmentsItem2Name.textContent = "Garden Tonic";


    const refreshmentsItem2Price = document.createElement("div");
    refreshmentsItem2Price.classList.add("itemPrice");
    refreshmentsItem2Price.textContent = "$9";

    refreshmentsItem2NamePrice.append(refreshmentsItem2Name, refreshmentsItem2Price);


    const refreshmentsItem2Info = document.createElement("div");
    refreshmentsItem2Info.classList.add("drinkInfo");
    refreshmentsItem2Info.textContent = "Cucumber, fresh mint, lime, and house-made tonic water.";

    refreshmentsItem2.append(refreshmentsItem2Img, refreshmentsItem2NamePrice, refreshmentsItem2Info);



    //Refreshment 3
    const refreshmentsItem3 = document.createElement("div");
    refreshmentsItem3.classList.add("drinkItems");

    const refreshmentsItem3Img = document.createElement("img");
    refreshmentsItem3Img.classList.add("drinks");
    refreshmentsItem3Img.src = drink3;


    const refreshmentsItem3NamePrice = document.createElement("div");
    refreshmentsItem3NamePrice.classList.add("drinkNamePrice");

    const refreshmentsItem3Name = document.createElement("div");
    refreshmentsItem3Name.classList.add("drinkName");
    refreshmentsItem3Name.textContent = "Crimson Berry Iced Tea";


    const refreshmentsItem3Price = document.createElement("div");
    refreshmentsItem3Price.classList.add("itemPrice");
    refreshmentsItem3Price.textContent = "$8";

    refreshmentsItem3NamePrice.append(refreshmentsItem3Name, refreshmentsItem3Price);


    const refreshmentsItem3Info = document.createElement("div");
    refreshmentsItem3Info.classList.add("drinkInfo");
    refreshmentsItem3Info.textContent = "Cold-brewed black tea infused with raspberry and hibiscus.";

    refreshmentsItem3.append(refreshmentsItem3Img, refreshmentsItem3NamePrice, refreshmentsItem3Info);


    //Adding each refreshment to the refreshment list
    refreshmentsList.append(refreshmentsItem1, refreshmentsItem2, refreshmentsItem3);

    //Adding the title and the refreshments list to the refreshment container
    refreshments.append(refreshmentsTitle, refreshmentsList);


    //Adding the small plates, main dishes, and refreshments to the main menu page

    menuDishes.append(smallPlates, mainCourses, refreshments);

    //Add to page
    menuPage.append(menuDishes);



    return { menuPage };
}