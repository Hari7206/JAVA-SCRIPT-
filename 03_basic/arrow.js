// so here we will learn the arrow abd this function
const user = {
username: "Hari" ,
price: 999,
welcomemessage: function() { 
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
}
}
// so our this will tell what the current context
user.welcomemessage()
user.username = "vikas "
user.welcomemessage()

console.log(this);



