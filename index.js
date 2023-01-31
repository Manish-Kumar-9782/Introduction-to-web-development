
// in this first we will make the total height for each list 

const dropDownLists = [...document.getElementsByClassName("dropdown-menu--list")]

const navBar = document.querySelector(".nav-bar.dropdowns");
const iframe = document.getElementById("iframe");

class List {

    constructor(parent, children) {
        this.parent = parent;
        this.children = children;
        this.list = document.createElement("ul");
        this.list.classList.add("dropdown-menu--list");
        this.parent.appendChild(this.list);
    }

    addItem(content) {
        const li = document.createElement("li");
        li.textContent = content;
        this.list.appendChild(li);
        return li;
    }

    addLinkItem(linkTitle, linkAddress) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = linkAddress;
        anchor.textContent = linkTitle
        li.appendChild(anchor)
        this.list.appendChild(li);
        return li;
    }
}

class DropdownMenu {
    constructor(parent, title) {
        this.parent = parent;
        this.Menu = document.createElement("li");
        this.Menu.classList.add("dropdown-menu");
        this.parent.appendChild(this.Menu);
        this.addTitle(title);
    }

    addTitle(content) {
        let title = document.createElement("span");
        title.classList.add("dropdown-menu--title");
        title.textContent = content;
        this.Menu.appendChild(title);
    }

    addMenuitems(itemList) {
        this.Menu.appendChild(itemList)
    }


}

const menu = {
    "CSS Properties": {
        "Position": "./Html-and-css/CSS Properties/position.html",
        "Box Shadow": "./Html-and-css/CSS Properties/box-shadow.html",
        "Box Sizing": "./Html-and-css/CSS Properties/box-sizing.html",
    },

    "HTML Elements": {
        "Input Element": "./Html-and-css/HTML Elements/input-form-tag.html",
        "Core Attributes": "./Html-and-css/Notes/Core Element and Attribute.html",
        "Head Element": "./Html-and-css/Notes/Head element.html",
        "HTML Attributes": "./Html-and-css/Notes/HTML Attributes.html",
        "Images, Audio & Video": "./Html-and-css/Notes/Images, Audio and Video.html",
        "Links & Navigation": "./Html-and-css/Notes/Links and Navigation.html",
    },
    "Projects": {
        "Project 1": "./Course Projects/HTML Day 8 - LIst with CSS.html",
        "Project 2": "./Course Projects/HTML Day 10 - Table with Css 1.html",
        "Project 3": "./Course Projects/HTML Day 10 - Table with Css 2.html",
        "Project 4": "./Course Projects/HTML Day 10 - Table Extra 1.html",
        "Project 5": "./Course Projects/HTML Day 10- Table Extra 2.html",
        "Project 6": "./Course Projects/card-layout1.html",
        "Project 7": "./Course Projects/Haunted House Card/HauntedHouseCard.html",
        "Project 8": "./Course Projects/HouseCard.html",
        "Project 9": "./Course Projects/Haunted House 2/haunted House 2.html",
        "Project 10": "./Course Projects/Flex Semantic Layout.html",
        "Project 11": "./Course Projects/Flex Practice 2.html",
        "Project 12": "./Course Projects/FlexBoxPractice1.html",
        "Project 13": "./Course Projects/HTML Day 16 - Flex Project 1.html",
        "Project 14": "./Course Projects/menu side bar/index.html",
        "Project 15": "./Course Projects/Game Cards/GameCard.html",
        "Project 16": "./Course Projects/Sale Page/SalePage.html",
        "Project 17": "./Course Projects/Social Platform/index.html",
        "Project 18": "./Course Projects/Witcher Medallion Card.html",

    }

}


Object.keys(menu).forEach(item => {
    let dropdownMenu = new DropdownMenu(document.querySelector(".nav-bar.dropdowns"),
        item)

    let dropdownMenuList = new List(dropdownMenu.Menu);

    Object.keys(menu[item]).forEach(listItem => {
        dropdownMenuList.addItem(listItem).onclick = function () {
            iframe.src = menu[item][listItem];
        }
        // console.log("list item add: ", dropdownMenuList.addItem(listItem));
    })

})