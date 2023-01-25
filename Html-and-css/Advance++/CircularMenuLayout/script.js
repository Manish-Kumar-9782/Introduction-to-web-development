
// Now first we need to get all the element which are required to 
// make the CircularMenu

const container = document.getElementById("container");
const handler = document.getElementById("handler");
const handlerButton = document.getElementById("handler-button");

// Now select all the menu-items
const menuItems = document.querySelectorAll(".menu-item");
const activeMenuItem = document.querySelector(".active-menu");

let handlerButtonBox = handlerButton.getBoundingClientRect();
let handlerButtonCenter = [
    handlerButtonBox.left + (handlerButtonBox.width / 2),
    handlerButtonBox.top + (handlerButtonBox.height / 2)
]

function getAbsoluteCenter(element) {
    if (element instanceof Element) {
        let item = element.getBoundingClientRect();
        return [item.left + (item.width / 2), item.top + (item.height / 2)]
    }
    else {
        console.error(element, " is not an instance of Element..")
    }

}
//  Now we need to calculate the distance by the two element
// distance will be measured from the top-left corner of the element.

function getDistanceBw(element1, element2) {

    let xDistance = 0;
    let yDistance = 0;

    if (element1 instanceof Element && element2 instanceof Element) {
        let box1 = element1.getBoundingClientRect();
        let box2 = element2.getBoundingClientRect();

        xDistance = box1.x - box2.x;
        yDistance = box1.y - box2.y
    }
    else {
        console.error("element1 and element2 both should be instance of Element")
    }

    return [xDistance, yDistance]
}

// function getPivotPoint(element) {
//     /**
//      * This function will be used to get the pivot point for the menu-item.
//      */
//     let cords = getDistanceBw(handler, element);
//     // Now we need to get the Bounding box for the handler so we can calculate
//     // the center point.

//     let box = handler.getBoundingClientRect();
//     return [cords[0] + (box.width / 2), cords[1] + (box.height / 2)]
// }

function getYPosition(cx, cy, r, x) {
    /**
     * This method is used to calculate the y position on a circular path.
     * cx: center x of circular path.
     * cy: center y of circular path.
     * x: x point on the curve.
     * r: radius of circular path.
     * 
     * return: y value (x-paired value.)
     */

    let value = r ** 2 - (cx - x) ** 2

    return value < 0 ? (Math.sqrt(Math.abs(value)) - cy) : (Math.sqrt(Math.abs(value)) - cy)
}


function getPivotPoint(element) {
    let elementCenter = getAbsoluteCenter(element);
    let handlerCenter = getAbsoluteCenter(handler);

    let xDistance = handlerCenter[0] - elementCenter[0];
    let yDistance = handlerCenter[1] - elementCenter[1];
    return [xDistance, yDistance];
}

function setPivotPoint(element) {
    if (element instanceof Element) {
        let point = getPivotPoint(element);
        element.style.transformOrigin = `${point[0]}px ${point[1]}px`;
        console.log("Pivot point for item ", `${point[0]}px ${point[1]}px`)
    } else {
        console.error(element, " is not an instance of Element..")
    }
}

//  Now we will set the pivot point for each




function putPivotPoint(parentElement, point) {
    let dot = document.createElement("div");
    dot.classList.add('dot');
    parentElement.appendChild(dot);
    dot.style.left = point[0];
    dot.style.right = point[1];
}

function markCenter(element) {
    if (element instanceof Element) {
        let box = element.getBoundingClientRect();
        let xCenter = box.width / 2;
        let yCenter = box.height / 2;
        putPivotPoint(element, [xCenter, yCenter]);
        return [xCenter, yCenter];
    }
    else {
        console.error(element, "is not an instance of Element");
    }

}

function explode() {
    console.log("exploding.")
    menuItems.forEach((item) => {
        item.style.left = "40px";
    })
    setTimeout(null, 2000);

    let i = 0;
    menuItems.forEach((item, index) => {
        // Now we need to set each menu item left to the handler
        // setPivotPoint(item);

        // (x-h)^2 + (y-k)^2 = r^2

        // sqrt(r^2 - (x-h^2)) + k

        let boxCenter = getAbsoluteCenter(container);
        let xPosition = (100 / menuItems.length * (index + 1)) / 100 * container.getBoundingClientRect().width - 42;
        item.style.left = xPosition + 'px';

        let yPosition = getYPosition(boxCenter[0], boxCenter[1], 40,
            (xPosition + container.getBoundingClientRect().left));

        let diff = 60;
        item.style.top = -(yPosition + diff) + 'px';
        console.log("left ", xPosition, "|\ttop: ", -(yPosition + diff));
    })
    document.getElementById("bt").onclick = collapse
}

function collapse() {
    console.log("collapsing")
    menuItems.forEach((item) => {
        item.style.left = 'calc(50%)';
        item.style.top = 'calc(50% - 40px)'
    })
    document.getElementById("bt").onclick = explode
}


document.getElementById("bt").onclick = explode