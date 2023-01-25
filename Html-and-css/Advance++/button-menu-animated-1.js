const btPress = document.getElementById("btvalue");
const items = document.getElementsByClassName("item");
let pos = 2;
let hoverEventId = 0;
let collapsed = 0;

let items_container = document.getElementsByClassName('container')[0];

/**
 * button8: 223, 508;
 * button7: 142, 452;
 * button6: 93, 380;
 * button5: 67, 300;
 * button4: 67, 216;
 * button3: 93, 135;
 * button2: 142, 67;
 * button1: 223, 5;
 * 
 */

let positions = [
    [223, 5],
    [142, 67],
    [93, 135],
    [67, 216],
    [67, 300],
    [93, 380],
    [142, 452],
    [223, 508]
]

let AnimeItems = [];


for (let i = 0; i < items.length; i++) {
    items[i].style.position = "absolute";
    AnimeItems[i] = new AnimeElement(items[i]);
}

let item = AnimeItems[0];

let initPosition = [item.getX(), item.getY()]

btPress.innerText = "expand";
btPress.onclick = expand



function collapse() {
    btPress.innerText = "expend"
    for (let i = 0; i < items.length; i++) {
        AnimeItems[i].moveTo(initPosition[0], 400);
    }
    btPress.onclick = expand;
}

function expand() {
    btPress.innerText = "collapse"
    for (let i = 0; i < items.length; i++) {

        AnimeItems[i].moveTo(positions[i][1], positions[i][0]);
    }
    btPress.onclick = collapse
}

