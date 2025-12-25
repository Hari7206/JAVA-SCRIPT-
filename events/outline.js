let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>  {
    console.log('Hey there');
    let a = 45;
    a++;
    console.log(a);
};

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {   
    console.log('I said don\'t click bro');
    console.error("ii  wrong number hai");
};

let para = document.querySelector("#para");
para.onmouseover = (evt) => {    // or here in the function we can add the object like evt which means event and can print different type of event 
  console.log(evt.type);
  
    console.log("Love you birader");
    let name = prompt("Enter your name ");
    console.log(name , 'I loveee you'); 
};
