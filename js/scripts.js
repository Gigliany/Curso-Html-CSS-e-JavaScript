// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
    e.preventDefaut();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
    setTimeout(() => {
        if (menu.classList.contains("menu-active")) {
          menu.classsList.remove("menu-active");
        }
    }, 500)
}

function  showSlides() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove("active");
    }

    slideIndex++
    if (slideIndex > slides.length) {
       slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("acitve");
    dots[slideIndex - 1].classList.add("acitve");
        

      setTimeout(showSlides, 3000);  
}


// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", function (e) {
      menu.classList.toggle("menu-active");
    }); 
});

allLinks.forEach((link) =>{
    link.addEventListener("click", smoothScroll)
});

// Incialização
showSlides();
() => {}

