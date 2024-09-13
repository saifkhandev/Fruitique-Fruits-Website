// Access the Testimonials
let testSlide = document.querySelectorAll('.testItem');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Add click event to the indicators
function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');
    if(testId > counter){
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter){return;}
    else {
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

// Add and remove active class from the indicators

function indicators(){
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Code for auto sliding
function slideNext() {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testSlide.length -1){
        counter = 0;
    }
    else{
        counter++;
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

function autoSliding(){
    deleteInterval = setInterval(timer, 4000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sum-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is is fulfilled, we ask what the issue was to know if we activated or de-activated the theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the class bg-header
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)


// HERO BANNER
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.hero-carousel');
let lisItemDom = document.querySelector('.hero-carousel .hero-list');
let thumbnailDom = document.querySelector('.hero-carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.onclick();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.hero-carousel .hero-list .hero-list-item');
    let itemThumbnail = document.querySelectorAll('.hero-carousel .thumbnail .thumbnail-item');

    if(type === 'next'){
        lisItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        lisItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    
}


/*=============== NAVBAR ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu SHOW
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

// Menu Hidden
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn')
      searchClose = document.getElementById('search-close')

// Search Show
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})

// Search Hidden
searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/

const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})