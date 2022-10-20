class UserCard {

    constructor(img, name, dept, amount) {
        this.userProfileImage = img;
        this.userName = name;
        this.userDepartment = dept;
        this.userAmount = amount;
    }
}

let names = ["kushal", "Ravi 1", "Ravi 2", "abhishek", "varsha"];
let img = "witcher-silver.jpg";

let dept = ["Design", "IT", "Mechanical", "Developer", "Management"]
let dept_colors = ["#FFF9B0", "#D58BDD", "#B73E3E", "#EEF1FF", "#47B5FF"]

let amount = [];

for (let i = 0; i < 5; i++) {
    amount.push(Math.floor(Math.random() * 100000));
}

let users = [];

for (let i = 0; i < 5; i++) {
    users.push(new UserCard(img, names[i], dept[i], amount[i]));
}
/**
 * <div class="card">
    <div class="card-header flex al-center down-bdr">
        <img class="pfi-img" src="witcher-silver.jpg" alt="img-profile">
        <p>User Name</p>
    </div>

    <div class="card-footer flex al-center js-sp-bw">
        <p><span class="bg-hlight">Design</span></p>
        <p>$123456</p>
    </div>
</div>
 */

const userCards = document.getElementById("user-cards");

for (let i = 0; i < 5; i++) {

    // 1. first make the card container
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");

    // 2. make card header and footer

    //  card header
    let cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header flex al-center down-bdr");

    let cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer flex al-center js-sp-bw");

    // now add/push/append
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardFooter);

    // 3. make append img element and p

    //<img class="pfi-img" src="witcher-silver.jpg" alt="img-profile">
    let img = document.createElement("img");
    img.setAttribute("class", "pfi-img");
    img.setAttribute("src", users[i].userProfileImage);
    img.setAttribute("alt", "usr-profile-img");

    let p = document.createElement("p");
    p.innerText = users[i].userName;

    // adding both img and p element inside the card header
    cardHeader.appendChild(img);
    cardHeader.appendChild(p);

    // 4. make dept and amount element
    let dept = document.createElement("p");
    let dept_span = document.createElement("span");
    dept_span.innerText = users[i].userDepartment;
    dept_span.setAttribute("class", "bg-hlight")
    dept_span.setAttribute("style", `color:${dept_colors[i]};`)
    dept.appendChild(dept_span);

    let amount = document.createElement("p");
    amount.innerText = "$" + users[i].userAmount;

    cardFooter.appendChild(dept);
    cardFooter.appendChild(amount);

    userCards.appendChild(cardContainer);
}


function random(start, end, n) {

    let nums = [];

    for (let i = 0; i < n; i++) {

        let rn1 = Math.floor(Math.random() * 10 + start);
        let rn2 = Math.floor(Math.random() * 10 + end);
        nums.push(Math.abs(rn2 - rn1));
    }

    return nums
}