const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

// function main() {
const main = () => {
  const root = document.getElementById("root");

  //add "Freelancers" as h1
  const h1 = document.createElement("h1");
  const rootHeader = document.createTextNode("Freelancers");

  h1.appendChild(rootHeader);
  root.appendChild(h1);

  //create unordered list
  const unorderedList = document.createElement("ul");

  //loop users list with for loop
  for(let i = 0; i < users.length; i++) {
    const userList = document.createElement("li");
    const userInfo = document.createTextNode(`${users[i].name}, age: ${users[i].age}, occupation: ${users[i].occupation}`);
    userList.appendChild(userInfo);
    unorderedList.appendChild(userList);
  }
  //append the ul to html
  root.appendChild(unorderedList);

  // extra for me. add text to footer
  const footer = document.querySelector(".footer-text");
  const footerText = document.createElement("p");
  footerText.textContent =" By Sombat Mayer | Fullstack Academy May 2023.";

  footer.appendChild(footerText)
}

main();
