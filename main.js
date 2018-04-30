'use strict';

const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const navbar = document.getElementById('navbar');

function handleAboutClick (e) {
    e.preventDefault();
    aboutLink.parentNode.classList.add('active');
    portfolioLink.parentNode.classList.remove('active');
    portfolioSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');
    window.location.assign('#about');
}

function handlePortfolioClick (e) {
    e.preventDefault();
    portfolioLink.parentNode.classList.add('active');
    aboutLink.parentNode.classList.remove('active');
    aboutSection.classList.add('hidden');
    portfolioSection.classList.remove('hidden');
    window.location.assign('#portfolio');
}

function showNavbarOnscroll() {
    const scrollBarPos = window.pageYOffset | document.body.scrollTop;
    if (scrollBarPos < 200) {
        navbar.classList.remove('floatingNav');
    } else {
        navbar.classList.add('floatingNav');
    }
}

window.onscroll=function(){showNavbarOnscroll()};
portfolioLink.addEventListener('click', handlePortfolioClick, false);
aboutLink.addEventListener('click', handleAboutClick, false);