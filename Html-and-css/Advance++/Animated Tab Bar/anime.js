// first we will get all the necessary element into the js object.

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const menuBorder = document.querySelector(".menu-border");
let activeItem = document.querySelector(".active");

// Now we will make a function which will be used to perform some
// action on click.

function clickItem(item, index) {

    // first we will check that which item is active.
    if (activeItem == item) return;

    // Now if item is not the previous activeItem then change the 
    // active item but first remove the active class form the
    // previous active item
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    // Now we will add the active class on the selected item.
    item.classList.add("active");
    // change the active item.
    activeItem = item;

    // Now here we need to set the position of the menuBorder as well.
    offsetMenuBorder(activeItem, menuBorder);
}

// Now we will make a function which will set the offset for menu-border
function offsetMenuBorder(el, menuBorder) {
    // el: element will be used to get the next offset for the menu-border
    // element.

    // first we will get the ActiveElement bounding box values
    const offsetActiveItem = el.getBoundingClientRect();
    // now we need to calculate the mid point for each Active element
    // by using the following formula.
    //offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2

    const offset = Math.floor(offsetActiveItem.left - menu.offsetLeft
        - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";

    // Now we will set the translate transform.
    menuBorder.style.transform = `translate3d(${offset}, 0, 0)`
}

// first we will run this offsetMenuBorder once for it's initial active element.
offsetMenuBorder(activeItem, menuBorder);

// Now we need to bind the each menuItem with the clickItem function.

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index))
})


// an event listener if our window resize then we need to adjust the menuBorder
// as well
addEventListener('resize', () => {
    console.log("resize event called.")
    offsetMenuBorder(activeItem, menuBorder);
})