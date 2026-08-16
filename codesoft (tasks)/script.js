// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ================================
// CLOSE MENU WHEN LINK IS CLICKED
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ================================
// TYPING EFFECT
// ================================

const words = [

    "MCA Student",
    "Web Developer",
    "Java Programmer",
    "Python Learner",
    "AI Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

            charIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 70 : 120);

}

typeEffect();


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(

".about,.skills,.projects,.contact,.project-card,.skill"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight-120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.querySelector(".top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.opacity="1";
        topBtn.style.pointerEvents="auto";

    }

    else{

        topBtn.style.opacity="0";
        topBtn.style.pointerEvents="none";

    }

});

// ================================
// FLOATING BUTTON EFFECT
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-8px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px) scale(1)";

    });

});

// ================================
// PROJECT CARD ANIMATION
// ================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.transform =
        `rotateX(${-(y-100)/20}deg)
         rotateY(${(x-150)/20}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});

// ================================
// NAVBAR SHADOW
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 5px 25px rgba(0,217,255,.3)";

    }

    else{

        header.style.boxShadow="none";

    }

});

// ================================
// IMAGE PARALLAX
// ================================

const image = document.querySelector(".home-image img");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.pageX)/40;

    let y = (window.innerHeight/2 - e.pageY)/40;

    image.style.transform=`translate(${x}px,${y}px)`;

});

// ================================
// PRELOADER (OPTIONAL)
// ================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});