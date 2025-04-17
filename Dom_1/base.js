// so what if we print the value like the window . console.log here we can learn that it behave like normally why so. because our javascript is the part of the window and the function like the alert and many other function are the part of the window 
window.console.log("hellow world"); // so this is how this also work normally as the normal code cause our js already now what we are doing
// so we can access the our html in the java script with the help of the dom = document object model  because it always present in the window as a document we can see that in our inspect also 
// so how to acess the html in the js now 
console.dir(document.body);  // this is how we can get the body of our html and in this there is a one child node which show us which kind of element we have in the body tag 

// so we can change the the our web page dynamically that why we need to use the js 
document.body.style.background = "pink";  // this is how we can change our page without using any css
document.body.childNodes[1].innerText = "the lesson about the dom"
// so ther are more way to get the any elemet by their id 
let text = document.getElementById("hey")
console.log(text);  //
let press = document.getElementsByClassName("heading")
console.dir(press)
console.log(press);

// so more easy than this we can also use the js querry for the better use to get every type of element with the single type of code
let button = document.querySelector("button")
console.dir(button);  // this is how we can select any thing with the help of the quary selector 
// we can select the id with the .class and the id with the #id we just have to put the name of the class and the id
console.log(button);

// now we are gonna see the more properties of the js where we have differ type of the element in the js also

// first of all we have the tag name properties which is mainly used for the tagname form it we can know the name of the tag that we use in the html making that tag in our console which shows us the tag
// then we have the two properties like the innertext and the innerhtml form the help of the inner text we can print the value of that elemet that what kind of data we have in that elemet . but with the help of the inner html we also can see the tag which we use in the html like sometime we use the sub script type element but that was not shown by the html inner text . it is only shown by the inner html . and then we have the inner . content which we can take for use as the data which also shows the which kind of the css element is use in that specific text or data 



