//<p> with red text that says “Hey I’m red!”
const container = document.querySelector("#container");

const content_p_red = document.createElement("p"); // Changed variable name
content_p_red.style.color = "red";
content_p_red.classList.add("content_p");
content_p_red.textContent = "Hey, I'm red!"; // Added exclamation mark for consistency
container.appendChild(content_p_red);


//<h3> with blue text that says “I’m a blue h3!”
const content_h3 = document.createElement("h3");
content_h3.style.color = "blue";
content_h3.classList.add("content_h3");
content_h3.textContent = "I’m a blue h3!";
container.appendChild(content_h3);


const content_div = document.createElement("div");
content_div.style.border = "1px solid black"; // Corrected border style for clarity
content_div.style.backgroundColor = "pink";

//created h1 and p inside div, firstly I have top append them to div, before
//appending div on container
const content_h1_in_div = document.createElement("h1"); // Changed variable name
content_h1_in_div.textContent = "I'm in a div"; // Consistent with lesson text

const content_p_in_div = document.createElement("p"); // Changed variable name
content_p_in_div.textContent = "ME TOO!"; // Consistent with lesson text

content_div.appendChild(content_h1_in_div);
content_div.appendChild(content_p_in_div);

container.appendChild(content_div);

