let h1 = document.querySelector("h1");
console.log(h1);  // Logging the <h1> element

let name = h1.getAttribute("class");
console.log(name);

let p = document.querySelector("p");
// console.log(p);

let rollno = p.getAttribute("id");
console.log(rollno);    

let div = document.querySelector("div");
let mates = div.getAttribute("roomMate");  // Corrected: Changed "roomMates" to "roomMate"
console.log(mates);  // This should now output "4"

let locations = div.getAttribute("current");
console.log(locations);  // This should now output "lab"

let card = document.querySelector("pre")
console.log(card.setAttribute("card", " not avilable"));

// now we are gonna add the style of css with the help of the java script 
div.style.height = "100px";
div.style.width = "100px";
div.style.borderRadius = "1px";
div.style.color = "white";
div.style.backgroundColor = "blue";
div.style.border = "black";

// now we learn how we can add element in the site with the help of the js 
let newbtn = document.createElement("button")
newbtn.innerText = "sign in";
div.before(newbtn)

