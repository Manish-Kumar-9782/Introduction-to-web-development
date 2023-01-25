
// Now here first we need to get all the required elements.

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const imageContainer = document.getElementById("image-container");
const activeBarContainer = document.getElementById("active-bar-container");

let imagePaths = ['G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\418407.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\532666.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\532668.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\546171.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\548302.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\551903.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\596901.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\601567.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\608887.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\657079 (1).jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\657079.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\714119.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\879848.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\951695.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\982990.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\cropped-1366-768-600255.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854671-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854673-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854716-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854746-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854777-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854865-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854868-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854872-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854874-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp1854876-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp582338-the-witcher-3-wallpapers.jpg', 'G:\\WorkData\\Programming\\Web Development\\Introduction-to-web-development\\Html-and-css\\Advance++\\WitcherImageSlider\\images\\wp775029-the-witcher-3-wallpapers.jpg'];

// fisrt we will load the images slides

imagePaths.forEach((img, index) => {
    let imgBox = document.createElement("div");
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", img);
    imgElement.setAttribute("alt", `image slide ${index}`);
    imgBox.classList.add("slide");
    if (index == 0) {
        imgBox.classList.add("active");
        document.body.style.backgroundImage = `url('${imagePaths[0].replaceAll("\\", "/")}')`
    }
    imgBox.appendChild(imgElement)
    imageContainer.appendChild(imgBox);

})
const images = Array(...document.querySelectorAll(".slide"));
let activeImage = document.querySelector(".active");
const bars = [];
let activeBar = null;
// first load all the bars which is equal to the number of images.

images.forEach((element, index) => {
    let bar = document.createElement("div");
    if (element == activeImage) {
        bar.classList.add("bar")
        bar.classList.add("active-bar")
        activeBar = bar;

    }
    else {
        bar.classList.add("bar")
    }
    bars.push(bar); // adding bar to the bars array.
    activeBarContainer.appendChild(bar);
    // adding bar container at the end of the active bar element.

})

// first calculate total number of bar elements



// Now we have all the image and required element. Now we need to select the active element.




// Now we need to make the initial move in which only one element will be active and visible
// other will be hidden.

// all the hidden image will be shift to left or right by 100% of it's width.

// leftShift fu

// adding images to the image-container




function moveFront(activeElement) {
    activeElement.style.left = "0";
    activeElement.classList.add("active");
    activeElement.style.visibility = "visible";
    bars[images.indexOf(activeElement)].classList.add("active-bar");
}

function hide(prevActiveElement, side) {

    if (side === "left") {
        prevActiveElement.style.left = "-100%";
    }
    else if (side === "right") {
        prevActiveElement.style.left = "+100%";
    }
    else {
        console.error("preActiveElement side is not valid", side);
    }

    prevActiveElement.classList.remove("active");
    bars[images.indexOf(prevActiveElement)].classList.remove("active-bar");
    // prevActiveElement.style.visibility = "hidden"
}

function leftShift(prevActiveElement) {

    let prevActiveElementIndex = images.indexOf(prevActiveElement);

    if (prevActiveElementIndex < images.length - 1) {
        activeImage = images[prevActiveElementIndex + 1];
        hide(prevActiveElement, 'left');
        moveFront(activeImage);
        document.body.style.backgroundImage = `url('${imagePaths[prevActiveElementIndex + 1].replaceAll("\\", "/")}')`;
    }
}

function rightShift(prevActiveElement) {
    let prevActiveElementIndex = images.indexOf(prevActiveElement);

    if (prevActiveElementIndex > 0) {
        activeImage = images[prevActiveElementIndex - 1];
        document.body.style.backgroundImage = `url('${imagePaths[prevActiveElementIndex - 1].replaceAll("\\", "/")}')`;
        hide(prevActiveElement, "right");
        moveFront(activeImage);
    }
}


// Now we will load the active-bar-container items.




// Initially we need to set all the image to right side.

images.forEach((element) => {

    if (element == activeImage) {
        moveFront(element);
    }
    else {
        hide(element, "right");
    }
})

leftButton.onclick = () => {
    leftShift(activeImage);
}

rightButton.onclick = () => {
    rightShift(activeImage);
}

let REVERSE = Boolean(true);

setInterval(() => {

    if (REVERSE) {
        if (images.indexOf(activeImage) < images.length) {
            leftShift(activeImage)
        }
        if (images.indexOf(activeImage) == images.length - 1)
            REVERSE = false;
    }
    else {
        if (images.indexOf(activeImage) >= 0) {
            rightShift(activeImage)
        }
        if (images.indexOf(activeImage) == 0)
            REVERSE = true;
    }



    // if ()
}, 2000)