const container = document.getElementById("container");
const handler = document.getElementById("handler");
const handlerButton = document.getElementById("handler-button");
const items = document.querySelectorAll(".item")
const toolTip = document.getElementById("tool-tip");


// const rotation = [-15, 0, 100];
const shift = [-100, 0, 100];
const originX = [80, 0, 0]
const toolTipsTfOrigin = [[124, 49], [], [109, 609]]

let itemsHeight = container.getBoundingClientRect().height - 310;

handlerButton.onclick = () => {
    container.classList.toggle("move-items");
    if (container.classList.contains("move-items")) {
        items.forEach((item, index) => {
            item.style.transform = `rotate(calc(45deg*var(--i)))`;
            item.getElementsByClassName("tooltip")[0].style.transform = `rotate(calc(-45deg*var(--i)))`;
            item.getElementsByClassName("tooltip")[0].style.transformOrigin = `${toolTipsTfOrigin[index][0]}px ${toolTipsTfOrigin[index][1]}px`
            item.style.transformOrigin = `${originX[index]}px 310px`;
        })
    }
    else {
        items.forEach((item, index) => {
            item.style.transform = ``;
        })
    }
}


function getAbsoluteCenter(element) {
    if (element instanceof Element) {
        let item = element.getBoundingClientRect();
        return [item.left + (item.width / 2), item.top + (item.height / 2)]
    }
    else {
        console.error(element, " is not an instance of Element..")
    }

}

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




document.body.onmousemove = (event) => {
    // console.log(`X: ${event.clientX},  Y: ${event.clientY}`)
    toolTip.innerText = `(${event.clientX},${event.clientY})`
    toolTip.style.left = event.clientX + 'px';
    toolTip.style.top = event.clientY + 'px';
}


/** Now we will expend the HTML section
 *
 * 1. flow
 * 2. heading
 * 3. sectioning
 * 4. phrasing
 * 5. embedded
 * 6. interactive
 * 7. metadata
 *
*/

// flow: base, link, meta, noscript, script, style, title.

const contentCategories = ["flow", "heading", "sectioning",
    "phrasing", "embedded", "interactive", "metadata"]


// now we need to add the html to the html-content section
const htmlContentButton = document.getElementById("html-content-button");
const htmlContent = document.getElementById("html-content");
const htmlContentCategories = document.getElementById("html-content-categories");



let childSections = {
    metadata: document.getElementById("html-content-metadata"),
    flow: document.getElementById("html-content-flow"),
    heading: document.getElementById("html-content-heading"),
    sectioning: document.getElementById("html-content-sectioning"),
    phrasing: document.getElementById("html-content-phrasing"),
    embedded: document.getElementById("html-content-embedded"),
    interactive: document.getElementById("html-content-interactive"),
}

function createHtmlMap(containerAttributes, containerElements) {
    /**
     * This function will be used to make a mapping object of htmlElements with the 
     * given attribute name.
     * 
     * containerAttributes: it should be an array of "string"s (name of attributes corresponding)
     *                      to the html element.
     * 
     * containerElements: it should be an array of "Element"s object which will be mapped to 
     *                      the corresponding attribute name.
     * 
     * Note: both containerElements and containerAttributes length should be equal.
     */

    if (!(containerAttributes instanceof Array)) {
        console.error("containerAttributes should be an instance of Array.")
        return -1;
    }

    if (!(containerAttributes instanceof Array)) {
        console.error("containerElements should be an instance of Array.")
        return -1;
    }

    if (containerAttributes.length == containerElements.length) {
        let obj = {};

        containerAttributes.forEach((item, index) => {
            obj[item] = containerElements[index];
        })

        return obj;
    }
    else {
        console.error("containerAttributes & containerElements length misMatch...!");
    }
}


function putHtml(parent, itemList, itemClass, qSelector = "") {
    let text = '';
    for (let i = 0; i < itemList.length; i++) {
        text += `<div class="${itemClass}" style="--i:${i}" name="${itemList[i]}">
                    <button>${itemList[i]}</button>
                </div>\n`
    }
    parent.innerHTML = text;
    if (qSelector.trim().length != 0) {
        return document.querySelectorAll(`${qSelector}`);
    }
}


function putHtmlContainers(parent, containerList, containerClass, qSelector = "") {
    /**
     * This function will be used to put n number of container with a 
     * common class.
     * 
     * The number of container will be decided by using the containerList
     */
    let text = "";
    if (containerList instanceof Array) {

        containerList.forEach(item => {
            text += `<div id="${item.replaceAll(" ", "-")}" class="${containerClass}" style="background-color:red;"></div>\n`
        })
        parent.innerHTML += text;
        console.log(parent)
    }
    else {
        console.log("parameter 'containerList' must be instance of Array!")
    }

    if (qSelector.trim().length != 0) {
        return document.querySelectorAll(`${qSelector}`);
    }
}

function bindHtml(htmlButtons, maps, deactivate = "") {

    let prevToggled = null;
    let prevChildToggled = null;
    htmlButtons.forEach((item) => {

        item.onclick = () => {
            console.log("category option activated.")
            if (prevToggled instanceof Element && prevToggled != item) {
                prevToggled.classList.remove("active");
            }
            if (prevChildToggled instanceof Element && prevChildToggled != maps[item.getAttribute("name")]) {
                prevChildToggled.classList.remove("active")
            }

            item.classList.toggle("active");
            console.log(item, maps);

            maps[item.getAttribute("name")].classList.toggle("active");
            console.log("item got map: ", maps[item.getAttribute("name")]);
            console.log("item got: ", item);
            prevToggled = item;
            prevChildToggled = maps[item.getAttribute("name")];


        }
    })
}

const htmlContentCategoriesButtons = putHtml(htmlContentCategories, contentCategories,
    'category', "#html-content .category");

bindHtml(htmlContentCategoriesButtons, childSections);

// ======================================================================== //
const metadataContent = ["base", "link", "meta", "noscript", "script", "style", "title"];

const flowContent = ["div", "span", "header", "footer", "h1-h6", "img", "button", "code",
    "form", "cite", "code", "label", "menu", "nav", "noscript", "output", "img", "ul", "ol", "dl",
    "blockquote", "svg", "table", "section", "pre"]

const sectionContent = ["header", "footer", "nav", "article", "aside", "section"]

const headingContent = ["h1", "h2", "h3", "h4", "h5", "h6"]

const phrasingContent = ["abbr", "audio", "b", "button", "cite", "code", "data", "datalist", "em",
    "i", "img", "kbd", "input", "output", "mark", "label", "q", "script", "select", "small",
    "sub", "sub", "u", "var"]

const embeddedContent = ["audio", "canvas", "embed", "iframe", "img", "math", "object",
    "picture", "svg", "video"]

const interactiveContent = ["a", "button", "datalist", "embed", "iframe", "label", "select", "textarea",
    "audio", "img", "input", "object", "video"]


// all categories parent container
const htmlContentMetadata = document.getElementById("html-content-metadata");
const htmlContentInteractive = document.getElementById("html-content-interactive");
const htmlContentEmbedded = document.getElementById("html-content-embedded");
const htmlContentPhrasing = document.getElementById("html-content-phrasing");
const htmlContentSectioning = document.getElementById("html-content-sectioning");
const htmlContentHeading = document.getElementById("html-content-heading");
const htmlContentFlow = document.getElementById("html-content-flow");


//  putting html for htmlContentMetadata
putHtml(htmlContentMetadata, metadataContent, "element");
putHtml(htmlContentInteractive, interactiveContent, "element");
putHtml(htmlContentEmbedded, embeddedContent, "element");
putHtml(htmlContentPhrasing, phrasingContent, "element");
putHtml(htmlContentSectioning, sectionContent, "element");
putHtml(htmlContentHeading, headingContent, "element");
putHtml(htmlContentFlow, flowContent, "element");

/** =====================================================================*/
// CSS section with #left-panel html element
const cssSections = ["selectors", "boxModel", "display", "layout", "position", "background",
    "color"]
const cssSectionLevel2 = {
    selectors: ["simple", "combinator", "pseudoClass", "pseudoElement", "attribute selector"],
    boxModel: ["content", "padding", "border", "margin"],
    display: ["inline", "block", "inline-block", "float", "flex", "grid", "table"],
    layout: ["flow", "float", "grid", "flex"],
    position: ["relative", "absolute", "fixed", "sticky"],
    background: [],
    color: []
}

const cssSectionLevel3 = {
    simple: ["tagName", "idName", "className"],
    combinator: ["descendant", "child", "adjacent sibling", "general sibling"],
    pseudoClass: ["elementDisplay", "input", "linguistic", "location", "Resource",
        "timeDimensional", "treeStructural", "UserAction", "functional"],
    mostlyUsed: []
}

const containerLevel1 = document.getElementById("level1")
const containerLevel2 = document.getElementById("level2")
const containerLevel3 = document.getElementById("level3")

const cssLevel1 = putHtml(containerLevel1, cssSections, "category", "#left-panel #level1 .category");
const cssContainerLevel2 = putHtmlContainers(containerLevel2, cssSections, "level-container", "#level2 .level-container")

// cssLevel1 contains all the level1 category button elements
// cssContainerLevel2 contains all the level 2 sub container.
// Now we need to bind each button with their corresponding container.
const cssLevel2ContainersMap = createHtmlMap(Array(...cssSections), Array(...cssContainerLevel2))
bindHtml(cssLevel1, cssLevel2ContainersMap, "#level2 .level-container");

const Maps = {}

cssSections.forEach(item => {
    // first put the html for each section
    let cssLevel = putHtml(cssLevel2ContainersMap[item], cssSectionLevel2[item], "category", `#left-panel #level2 #${item} .category`);
    //  Now we need to put the category element inside the each cssLevel2Containers.
    let cssContainerLevel = putHtmlContainers(containerLevel3, cssSectionLevel2[item], `${item.replaceAll(" ", "-")} level-container`, `#level3 .${item.replaceAll(" ", "-")}.level-container`)
})

cssSections.forEach(item => {

    // cssLevel contains all the level1 category button elements
    let cssLevel = document.querySelectorAll(`#left-panel #level2 #${item} .category`)
    // cssContainerLevel contains all the next level sub container.
    let cssContainerLevel = document.querySelectorAll(`#level3 .${item.replaceAll(" ", "-")}.level-container`)
    // Now we need to bind each button with their corresponding container.
    let Map = createHtmlMap(Array(...cssSectionLevel2[item]), Array(...cssContainerLevel))
    console.log(cssLevel, cssContainerLevel, Map);
    bindHtml(cssLevel, Map, `#level3 .${item.replaceAll(" ", "-")}.level-container`);
})

/** =====================================================================*/