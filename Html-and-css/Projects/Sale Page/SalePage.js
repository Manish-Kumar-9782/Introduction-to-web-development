class User {

  constructor(type_logo, type_title,
    where_logo, where_title, description, amount, date) {

    this.type_logo = type_logo;
    this.type_title = type_title;
    this.where_logo = where_logo;
    this.where_title = where_title;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }
}

// let type_logos = {
//   round_exclamation: `<svg viewBox="0 0 24 24" class="svg-icon" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
//     <circle cx="12" cy="12" r="10"></circle>
//     <line x1="12" y1="8" x2="12" y2="12"></line>
//     <line x1="12" y1="16" x2="12.01" y2="16"></line>
//   </svg>`,

//   down_arrow: `<svg viewBox="0 0 24 24" class="svg-icon" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
//   <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
//   <line x1="1" y1="10" x2="23" y2="10"></line>
// </svg>`,

//   card: `<svg viewBox="0 0 24 24" class="svg-icon" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
//     <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
//     <line x1="1" y1="10" x2="23" y2="10"></line>
//   </svg>`

// }


// let where_logos = {

//   paypal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" class="svg-icon">
//     <path fill="#03a9f4" d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"></path>
//     <path fill="#283593" d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"></path>
//   </svg>`,

//   microsoft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" class="svg-icon">
//     <path fill="#03a9f4" d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"></path>
//     <path fill="#283593" d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"></path>
//   </svg>`,

//   apple: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005" class="svg-icon">
//     <g fill="#37474f">
//       <path d="M461.852 355.712c-1.692-2.616-4.443-4.362-7.531-4.779-40.621-5.306-69.25-42.537-63.944-83.158 3.748-28.694 23.84-52.588 51.465-61.205 5.61-1.798 8.701-7.803 6.903-13.413-.28-.873-.671-1.707-1.164-2.481-18.641-33.642-51.786-56.779-89.792-62.677-19.152.914-38.026 4.957-55.872 11.968-12.817 5.158-26.351 8.317-40.128 9.365-13.777-1.048-27.311-4.207-40.128-9.365-17.846-7.011-36.72-11.054-55.872-11.968-39.829 0-117.333 56.469-117.333 160 0 98.389 71.765 224 128 224 21.457.192 42.656-4.691 61.867-14.251 7.235-3.99 15.232-6.404 23.467-7.083 8.234.679 16.232 3.093 23.467 7.083 19.211 9.56 40.41 14.443 61.867 14.251 44.587 0 94.912-76.544 115.989-147.477.882-2.979.422-6.197-1.261-8.81z"></path>
//       <path d="M251.121 128c64.772-.071 117.263-52.561 117.333-117.333C368.454 4.776 363.679 0 357.788 0c-64.772.071-117.263 52.561-117.333 117.333-.001 5.891 4.775 10.667 10.666 10.667z"></path>
//     </g>
//   </svg>`,

//   adobe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-icon">
//     <g fill="#f44336">
//       <path d="M211.563 26.133c-1.971-2.993-5.313-4.796-8.896-4.8h-192C4.776 21.333 0 26.109 0 32v448c-.001 5.07 3.566 9.439 8.533 10.453.702.141 1.417.213 2.133.213 4.255.015 8.111-2.5 9.813-6.4l192-448c1.43-3.315 1.085-7.128-.916-10.133zM265.877 187.989c-1.632-4.021-5.537-6.653-9.877-6.656-4.293-.001-8.169 2.571-9.835 6.528l-85.333 202.667c-2.286 5.43.263 11.684 5.692 13.97 1.311.552 2.72.836 4.142.836h77.931l29.419 78.421c1.564 4.158 5.541 6.912 9.984 6.912h85.333c5.891-.004 10.664-4.782 10.66-10.673-.001-1.373-.267-2.732-.783-4.004L265.877 187.989zM501.333 21.333h-192c-5.891-.021-10.683 4.738-10.704 10.629-.005 1.481.298 2.947.89 4.304l192 448c1.702 3.9 5.559 6.415 9.813 6.4.716-.001 1.431-.072 2.133-.213 4.967-1.014 8.534-5.384 8.533-10.453V32c.002-5.891-4.774-10.667-10.665-10.667z"></path>
//     </g>
//   </svg>`,

//   spotify: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.652 427.652" class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 dark:border-gray-800">
//     <path fill="#00d95f" d="M213.826 0C95.733 0 0 95.733 0 213.826s95.733 213.826 213.826 213.826 213.826-95.733 213.826-213.826S331.919 0 213.826 0zm93.06 310.32c-2.719 4.652-7.612 7.246-12.638 7.247-2.506 0-5.044-.645-7.364-2-38.425-22.456-82.815-26.065-113.295-25.138-33.763 1.027-58.523 7.692-58.769 7.76-7.783 2.126-15.826-2.454-17.961-10.236-2.134-7.781 2.43-15.819 10.209-17.962 1.116-.307 27.76-7.544 64.811-8.766 21.824-.72 42.834.801 62.438 4.52 24.83 4.71 47.48 12.978 67.322 24.574 6.973 4.074 9.321 13.03 5.247 20.001zm27.184-56.459c-3.22 5.511-9.016 8.583-14.97 8.584-2.968 0-5.975-.763-8.723-2.369-45.514-26.6-98.097-30.873-134.2-29.776-39.994 1.217-69.323 9.112-69.614 9.192-9.217 2.515-18.746-2.906-21.275-12.124-2.528-9.218 2.879-18.738 12.093-21.277 1.322-.364 32.882-8.937 76.77-10.384 25.853-.852 50.739.949 73.96 5.354 29.412 5.58 56.241 15.373 79.744 29.108 8.26 4.826 11.042 15.434 6.215 23.692zm16.711-51.335c-3.641 0-7.329-.936-10.7-2.906-108.207-63.238-248.572-25.643-249.977-25.255-11.313 3.117-23.008-3.527-26.124-14.839-3.117-11.312 3.527-23.008 14.839-26.124 1.621-.447 40.333-10.962 94.166-12.737 31.713-1.044 62.237 1.164 90.72 6.567 36.077 6.844 68.987 18.856 97.815 35.704 10.13 5.92 13.543 18.931 7.623 29.061-3.95 6.76-11.059 10.529-18.362 10.529z"></path>
//   </svg>`
// }


class UserCard {

  constructor(img, name, dept, amount) {
    this.userProfileImage = img;
    this.userName = name;
    this.userDepartment = dept;
    this.userAmount = amount;
  }
}

let names = ["kushal", "Ravi 1", "Ravi 2", "abhishek", "varsha"];
let img = "../witcher-silver.jpg";

let dept = ["Design", "IT", "Mechanical", "Developer", "Management"]

let amount = [];

// generating the radom amount
for (let i = 0; i < 5; i++) {
  amount.push(Math.floor(Math.random() * 100000));
}

let users = [];

for (let i = 0; i < 5; i++) {
  users.push(new UserCard(img, names[i], dept[i], amount[i]));
}
/**
* <div class="card">

    <div class="card-top flex al-center">

        <img class="user-pfi" src="../witcher-silver.jpg" alt="profile-image">
        <p>Manish Kaumar</p>

    </div>
    <div class="card-bottom flex  al-center jc-sp-bw">
        <p><span class="hlight">Design</span></p>
        <p>$123456</p>
    </div>

  </div>
*/

const userCards = document.getElementById("users-cards");

for (let i = 0; i < 5; i++) {

  // 1. first make the card container
  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card");

  // 2. make card header and footer

  //  card header
  let cardHeader = document.createElement("div");
  cardHeader.setAttribute("class", "card-top flex al-center");

  let cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-bottom flex  al-center jc-sp-bw");

  // now add/push/append
  cardContainer.appendChild(cardHeader);
  cardContainer.appendChild(cardFooter);

  // 3. make append img element and p for card header 
  //<img class="user-pfi" src="witcher-silver.jpg" alt="img-profile">
  let img = document.createElement("img");
  img.setAttribute("class", "user-pfi");
  img.setAttribute("src", users[i].userProfileImage);
  img.setAttribute("alt", "usr-profile-img");

  let p = document.createElement("p");
  p.innerText = users[i].userName;

  // adding both img and p element inside the card header
  cardHeader.appendChild(img);
  cardHeader.appendChild(p);

  // 4. make dept and amount element
  let dept = document.createElement("p");
  let bg_span = document.createElement("span");
  bg_span.setAttribute("class", "hlight");
  dept.appendChild(bg_span);
  bg_span.innerText = users[i].userDepartment;

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