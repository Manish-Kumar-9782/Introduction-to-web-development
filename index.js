
// in this first we will make the total height for each list 

const dropDownLists = [...document.getElementsByClassName("dropdown-menu--list")]

const navBar = document.querySelector(".nav-bar.dropdowns");

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
        "padding": "#",
        "padding2": "#",
        "padding3": "#",
        "padding5": "#"
    }
}


Object.keys(menu).forEach(item => {
    let dropdownMenu = new DropdownMenu(document.querySelector(".nav-bar.dropdowns"),
        item)

    let dropdownMenuList = new List(dropdownMenu.Menu);

    Object.keys(menu[item]).forEach(listItem => {
        dropdownMenuList.addItem(listItem)
    })

})