import location from "./assets/location.png";
import phone from "./assets/phone.png";
import email from "./assets/email.png";

export default function loadContact() {

    const contactPage = document.createElement("div");

    //Making the contact header
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contactHeader");

    const contactUs = document.createElement("div");
    contactUs.classList.add("contactUs");
    contactUs.textContent = "Contact Us";

    const contactStatement = document.createElement("div");
    contactStatement.classList.add("contactStatement");
    contactStatement.textContent = "We'd love to hear from you. Book a table or drop by for a visit.";

    //Adding contact header to page
    contactHeader.append(contactUs, contactStatement);
    contactPage.append(contactHeader);





    //Main area of contact page
    const contactContent = document.createElement("div");
    contactContent.classList.add("contactContent");

    //Left side of contact page
    const contactContentLeftSide = document.createElement("div");
    contactContentLeftSide.classList.add("contactContentLeftSide");

    const getInTouch = document.createElement("div");
    getInTouch.classList.add("getInTouch");
    getInTouch.textContent = "Get in Touch";

    const inquiry = document.createElement("div");
    inquiry.classList.add("inquiry");
    inquiry.textContent = "Have a question about our menu or want to host an event? Reach out to us directly or visit us at our Food District location.";

    //Address, phone number, email
    const contactAdressPhoneNumberEmail = document.createElement("div");
    contactAdressPhoneNumberEmail.classList.add("contactAdressPhoneNumberEmail");


    //Adress div
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("infoContainer");

    const addressContainerImg = document.createElement("img");
    addressContainerImg.classList.add("imgContainer");
    addressContainerImg.src = location;

    const addressContainerRight = document.createElement("div");
    addressContainerRight.classList.add("rightContainer");

    const addressContainerRightTitle = document.createElement("div");
    addressContainerRightTitle.classList.add("rightTitle");
    addressContainerRightTitle.textContent = "Visit Us";

    const addressContainerRightInfo = document.createElement("div");
    addressContainerRightInfo.classList.add("rightInfo");
    addressContainerRightInfo.textContent = "0000 Crimson Way, Toronto, ON M0M 0M0 Canada";

    addressContainerRight.append(addressContainerRightTitle, addressContainerRightInfo);

    addressContainer.append(addressContainerImg, addressContainerRight);


    //Phone number div
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("infoContainer");

    const phoneContainerImg = document.createElement("img");
    phoneContainerImg.classList.add("imgContainer");
    phoneContainerImg.src = phone;

    const phoneContainerRight = document.createElement("div");
    phoneContainerRight.classList.add("rightContainer");

    const phoneContainerRightTitle = document.createElement("div");
    phoneContainerRightTitle.classList.add("rightTitle");
    phoneContainerRightTitle.textContent = "Call Us"

    const phoneContainerRightInfo = document.createElement("div");
    phoneContainerRightInfo.classList.add("rightInfo");
    phoneContainerRightInfo.textContent = "+1 (416) 000-0000";

    phoneContainerRight.append(phoneContainerRightTitle, phoneContainerRightInfo);

    phoneContainer.append(phoneContainerImg, phoneContainerRight);




    //Email Div
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("infoContainer");

    const emailContainerImg = document.createElement("img");
    emailContainerImg.classList.add("imgContainer");
    emailContainerImg.src = email;

    const emailContainerRight = document.createElement("div");
    emailContainerRight.classList.add("rightContainer");

    const emailContainerRightTitle = document.createElement("div");
    emailContainerRightTitle.classList.add("rightTitle");
    emailContainerRightTitle.textContent = "Email Us"

    const emailContainerRightInfo = document.createElement("div");
    emailContainerRightInfo.classList.add("rightInfo");
    emailContainerRightInfo.textContent = "contact@thecrimsonfork.example";

    emailContainerRight.append(emailContainerRightTitle, emailContainerRightInfo);

    emailContainer.append(emailContainerImg, emailContainerRight);


    //Adding the 3 pieces of info to the container
    contactAdressPhoneNumberEmail.append(addressContainer, phoneContainer, emailContainer)


    //Map image
    const mapImg = document.createElement("div");
    mapImg.classList.add("mapImg");

    const openInMaps = document.createElement("div");
    openInMaps.classList.add("openInMaps");

    const pinIcon = document.createElement("img");
    pinIcon.classList.add("pinIcon");

    const openInMapsText = document.createElement("div");
    openInMapsText.classList.add("openInMapsText");
    openInMapsText.textContent = "Open in Maps";

    openInMaps.append(pinIcon, openInMapsText);

    //Adding button to map img
    mapImg.append(openInMaps);

    //Adds all the content to the left side container
    contactContentLeftSide.append(getInTouch, inquiry, contactAdressPhoneNumberEmail, mapImg);




    //Right side of contact page
    const contactContentRightSide = document.createElement("div");
    contactContentRightSide.classList.add("contactContentRightSide");


    const contactContentRightSideTop = document.createElement("div");
    contactContentRightSideTop.classList.add("contactContentRightSideTop");

    const clockImg = document.createElement("img");
    clockImg.classList.add("clockImg");

    const openingHours = document.createElement("div");
    openingHours.classList.add("openingHours");
    openingHours.textContent = "Opening Hours";

    contactContentRightSideTop.append(clockImg, openingHours);



    const contactContentRightSideMiddle = document.createElement("div");
    contactContentRightSideMiddle.classList.add("contactContentRightSideMiddle");


    for (let i = 0; i < 7; i++) {

        const dayAndHours = document.createElement("div");
        const day = document.createElement("div");
        const hoursOfOperation = document.createElement("div");

        //Weekdays
        if (i < 5) {

            switch (i) {
                case 0:
                    day.textContent = "Monday";
                    day.classList.add("day");
                    break;
                case 1:
                    day.textContent = "Tuesday";
                    day.classList.add("day");
                    break;
                case 2:
                    day.textContent = "Wednesday";
                    day.classList.add("day");
                    break;
                case 3:
                    day.textContent = "Thursday";
                    day.classList.add("day");
                    break;
                case 4:
                    day.textContent = "Friday";
                    day.classList.add("day");
                    break;
            }
            hoursOfOperation.classList.add("regularHours");
            hoursOfOperation.textContent = "11am - 10pm";

        }

        //Weekends
        else {
            switch (i) {
                case 5:
                    day.textContent = "Saturday";
                    day.classList.add("day");
                    break;
                case 6:
                    day.textContent = "Sunday";
                    day.classList.add("day");
                    break;
            }
            hoursOfOperation.classList.add("specialHours");
            hoursOfOperation.textContent = "10am - 11pm";
        }
        dayAndHours.append(day, hoursOfOperation);
        contactContentRightSideMiddle.append(dayAndHours);

    }



    const contactContentRightSideBottom = document.createElement("div");
    contactContentRightSideBottom.classList.add("contactContentRightSideBottom");

    const contactContentRightSideBottomImg = document.createElement("img");
    contactContentRightSideBottomImg.classList.add("contactContentRightSideBottomImg");

    const contactContentRightSideBottomInfo = document.createElement("div");
    contactContentRightSideBottomInfo.classList.add("contactContentRightSideBottomInfo");
    contactContentRightSideBottomInfo.textContent = "Kitchen closes 30 minutes before closing time. Holiday hours may vary.";

    contactContentRightSideBottom.append(contactContentRightSideBottomImg, contactContentRightSideBottomInfo);


    //Adding everything to ride side container
    contactContentRightSide.append(contactContentRightSideTop, contactContentRightSideMiddle, contactContentRightSideBottom);

    contactContent.append(contactContentLeftSide, contactContentRightSide);

    //Adding main content to contact page
    contactPage.append(contactContent);


    return { contactPage };

}