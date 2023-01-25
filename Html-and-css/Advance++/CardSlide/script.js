
// Now after making all the html and css content we need to handle the script part.

// first we will get the all cards.

const cards = document.querySelectorAll(".card");
const moveLeftButton = document.getElementById("left");
const moveRightButton = document.getElementById("right");

// Note the only 1 card will be on top of the above all other will be hidden
// behind the container.

/**
 * we need to method named as moveLeft and moveRight left and right button.
 * 
 * 1. we need to change the z-index in each shift.
 * 2. we need to shift the position of the each card as well. 
 */

// we need to maintain the index for the active element
let activeElementIndex = 0; // initially 0 is the index element.


function getNumericProperty(element, property) {

    let value = getComputedStyle(element)[property];

    if (value.endsWith("px")) {
        value = Number(value.replace("px", ""));
    }
    return value;
}


function move(element, index) {
    let computedStyle = getComputedStyle(element);
    if (index == activeElementIndex) {
        element.classList.add("active")

        element.style.zIndex = "1";
        element.style.scale = "1.0"
        element.style.visibility = "visible"
        element.style.left = "230px"
        element.style.top = "65px"
    }
    else if (index > activeElementIndex || index < activeElementIndex) {
        // if index is greater than the activeElementIndex than it means this card is on right side
        element.style.zIndex = `${-Math.abs((activeElementIndex - index)) - 1}`;
        element.style.scale = "0.9";
        element.classList.remove("active");
        if (Math.abs((activeElementIndex - index)) <= 2) {
            element.style.visibility = "visible";
            element.style.left = (activeElementIndex - index) * 100 + 'px';
            console.log("initiating element with index: ", index, (activeElementIndex - index));
        }
        else {
            element.style.visibility = "hidden";
            // console.log("card ", index, " hidden")
        }
    }
}

function moveLeft(element, index) {
    move(element, index)
    if (activeElementIndex < cards.length) {
        // element.style.left = (getNumericProperty(element, 'left') - 50) + 'px';

    }
}

function moveRight(element, index) {
    move(element, index)

    if (activeElementIndex < cards.length) {
        // element.style.left = (getNumericProperty(element, 'left') + 50) + 'px';

    }
}

function initCardsPosition() {
    // first we need to set the active element 
    cards[0].classList.add("active");

    // Now for each element we need to set the z-index. and the position as well.
    cards.forEach((el, i) => {
        // let leftPosition = cards[i].getBoundingClientRect().left
        // el.style.transform = `translate3d(${i * 90 + 300}px, 50px, 100px)`

        let indexDiff = activeElementIndex - i;

        if (i != activeElementIndex) {
            el.style.zIndex = `${-Math.abs(indexDiff) - 1}`
            el.style.scale = "0.9";
        }
        else {
            el.style.zIndex = `1`
            el.style.left = "230px"
            el.style.top = "65px"
        }

        if ((i <= activeElementIndex || i >= activeElementIndex) && (Math.abs(indexDiff)) <= 2) {
            el.style.visibility = "visible";
            if (i == activeElementIndex) {
                el.style.left = '230px';
            }
            else {
                el.style.left = (indexDiff * 100) + 'px';
                console.log("initiating element with index: ", i, indexDiff);

            }

        }
        else {
            el.style.visibility = "hidden"
        }

    })
}


// for initial card position.
initCardsPosition();

moveLeftButton.onclick = () => {

    if (activeElementIndex < cards.length - 1) {
        activeElementIndex++; // increase the active element index
        // console.log("activeElementIndex: ", activeElementIndex);

        cards.forEach((element, index) => {
            moveLeft(element, index)
        })
    }


}

moveRightButton.onclick = () => {
    if (activeElementIndex > 0) {
        activeElementIndex--; // increases the active element index.
        // console.log("activeElementIndex: ", activeElementIndex);

        cards.forEach((element, index) => {
            moveRight(element, index)
        })
    }


}