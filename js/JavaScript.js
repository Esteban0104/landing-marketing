const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Innovacion", "Progreso", "Impulso", "Cambios"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 1200,
    origin: 'left',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.card', {
    duration: 1200,
    origin: 'bottom',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.container', {
    duration: 1800,
    origin: 'bottom',
    distance: '-100px'
  });
  /* window.sr = ScrollReveal();
  sr.reveal('.img-about', {
    duration: 1800,
    origin: 'left',
    distance: '-100px'
  }); */
 /*  window.sr = ScrollReveal();
  sr.reveal('.text1', {
    duration: 1800,
    origin: 'rigth',
    distance: '-100px'
  }); */
  window.sr = ScrollReveal();
  sr.reveal('.c1', {
    duration: 2000,
    origin: 'rigth',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.c2', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.c3', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
  });