// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

menuBtn.onclick = () => {
menu.classList.toggle("active");
};


// TYPING EFFECT

const words = ["Web Developer","Frontend Developer","Freelancer"];

let i = 0;
let timer;

function typingEffect(){

let word = words[i].split("");
let loopTyping = function(){

if(word.length > 0){
document.getElementById("typing").innerHTML += word.shift();
}

else{
deletingEffect();
return;
}

timer = setTimeout(loopTyping,150);

};

loopTyping();

}

function deletingEffect(){

let word = words[i].split("");

let loopDeleting = function(){

if(word.length > 0){

word.pop();

document.getElementById("typing").innerHTML = word.join("");

}

else{

i++;

if(i >= words.length){
i = 0;
}

typingEffect();
return;

}

timer = setTimeout(loopDeleting,80);

};

loopDeleting();

}

typingEffect();


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});