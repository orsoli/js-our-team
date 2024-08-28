// --- Preparation phase
// Retrieve interested elements from DOM
const containerElement = document.getElementById("container");

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
  // Create html structure and print in container element with inerHTML
  containerElement.innerHTML += `
    <ul class = 'list-unstyled'>
        <H5>Candidate</H5>
        <li>Name: ${profile.firstName}</li>
        <li>Surname: ${profile.lastName}</li>
        <li>Role: ${profile.job}</li>
        <li><img src='${profile.portretImg}' /></li>
    <ul>
  `;

  // Print in Console all data
  console.log(`
        Name: ${profile.firstName}
        Surname: ${profile.lastName}
        Role: ${profile.job}
        Profile Photo: ${profile.portretImg}
        `);
}
