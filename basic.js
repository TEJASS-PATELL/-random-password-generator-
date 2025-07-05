const passwordBox = document.getElementById("password");
const length = 14; 
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const symbols = "!@#$%^&*()[]{}|?<>-+=~";
const number = "1234567890";

const allchars = upperCase + lowerCase + symbols + number

function createpassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += number[Math.floor(Math.random() * number.length)];
    
    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function remove(){
    passwordBox.value = null;
}

document.querySelector(".buttonn").addEventListener("click",createpassword);

document.querySelector(".container img").addEventListener("click",copypassword);

document.querySelector(".button").addEventListener("click",remove);