const urls_labels = [ 
    "HTML", "Content 2", "Content 3" 
];


const urls = [
    "urls/HTML/Core Element and Attribute.html", "#", "#"
];

// first of all we need to make our header and the side bar.

function element(tag, content){
    return "<"+tag+">" +content+ "</"+tag+">"
};


const in_progress_page = "InProgress.html";

let content = document.getElementById("content");

let sidebar = document.getElementById("sidebar");



// Now we need to add a list of items in our side bar

let sidebar_list = document.createElement("ul");
sidebar_list.setAttribute("id", "content-list");

// properties of the list & list items
sidebar_list.style.listStyleType = 'none';


// now we have the sidebar list this will contain the list items.
let list_item = null;
let list_link = null;
for(let i = 0; i<urls.length; i++){
    list_item = document.createElement("li"); // creating the list item.
    list_link = document.createElement("a"); // creating anchor element for list links
    list_link.setAttribute("href", urls[i]); // appending our link into our list.
    list_link.innerHTML = urls_labels[i]; // 
    list_item.appendChild(list_link);
    sidebar_list.appendChild(list_item);
}

sidebar.appendChild(sidebar_list);
