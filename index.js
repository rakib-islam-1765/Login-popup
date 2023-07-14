// select dom elements 
// const confirm = document.getElementById("confirm");
// const prompt = document.getElementById("prompt");

// function showAlert(){
//     window.alert('hello world')
// } 

// function showConfirm(){
//     let txt;

//     if(window.confirm("Press a button")){
//         txt = "You pressed ok";
//     } else {
//         txt = "You pressed cancel";
//     }
//     confirm.innerHTML = txt;
// }

// function showPrompt(){
//    let person = window.prompt("Please enter your name:", "Harry potter");

//    if(person === null || person === ""){
//     txt = "User cancelled the prompt!"; 
//    } else{
//     txt = "hello" + person + "! How are you"
//    }
//    prompt.innerHTML = txt;
// }

function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}
function closeModal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
}
var btnlogin=document.querySelector(".btn-login");//Button
btnlogin.addEventListener("click",showModal)//Button Click

var c=document.querySelector("span");
c.addEventListener("click",closeModal)