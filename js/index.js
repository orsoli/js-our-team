// --- Preparation phase
// Retrieve interested elements from DOM
const containerElement = document.querySelector(".container ul");

// Define functions
// Create a function to print in console
/**
 *
 * @param {*} profile
 */
const printInConsole = (profile) => {
  // Print in Console all data
  console.log(`
    Name: ${profile.firstName}
    Surname: ${profile.lastName}
    Role: ${profile.job}
    Profile Photo: ${profile.portretImg}
    `);
};

// Create a function to print in DOM
/**
 *
 * @param {*} profile
 */
const printInDom = (profile) => {
  // Create html structure and print in ul element with inerHTML
  containerElement.innerHTML += `
  <li>
        <img src="${profile.portretImg}" alt="">
        <h4>${profile.firstName} ${profile.lastName}</h4>
        <p>${profile.job}</p>
  </li>
`;
};

// Create array object called data
const profilesData = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    job: "Founder & CEO",
    portretImg: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    job: "Chief Editor ",
    portretImg: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    job: "Office Manager ",
    portretImg: "./img/walter-gordon-office-manager.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    job: "Social Media Manager",
    portretImg: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    job: "Developer",
    portretImg: "./img/scott-estrada-developer.jpg",
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    job: "Graphic Designer",
    portretImg: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

// --- Proccesing Phase
// Create a for of loop to pass in each object inside profilesData array
for (let profile of profilesData) {
  printInConsole(profile); // Call back printInConsole arrow function and give 'profile' argument.
  printInDom(profile); // Call back printInDom arrow function and give 'profile' argument.
}
