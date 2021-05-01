const pElement = document.getElementById("typer");
const toRenderContent = `Hello,</h4>
<h2>I'm Amar</h2>
<h3>MERN Full Stack Intern </h3>
Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp,customer web portal, documentary launch website, and donations webapp for a local charity.Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.`;
let i = 0;
let timeFunction = setInterval(dynamicType, 100);
function dynamicType() {
  if (i >= toRenderContent.length) {
    clearInterval(timeFunction);
  } else {
    pElement.innerHTML += toRenderContent[i];
  }
  i++;
}