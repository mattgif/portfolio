'use strict';

const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const navbar = document.getElementById('navbar');

function handleAboutClick (e) {
    // makes about content visible / hides portfolio
    if (e) {
        e.preventDefault();
    }
    aboutLink.parentNode.classList.add('active');
    portfolioLink.parentNode.classList.remove('active');
    portfolioSection.classList.remove('visible');
    aboutSection.classList.add('visible');
}

function handlePortfolioClick (e) {
    // makes portfolio visible / hides bio
    e.preventDefault();
    portfolioLink.parentNode.classList.add('active');
    aboutLink.parentNode.classList.remove('active');
    aboutSection.classList.remove('visible');
    portfolioSection.classList.add('visible');
}

function showNavbarOnscroll() {
    // navbar hidden until main site banner covered
    const scrollBarPos = window.pageYOffset | document.body.scrollTop;
    if (scrollBarPos < 200) {
        navbar.classList.remove('floatingNav');
    } else {
        navbar.classList.add('floatingNav');
    }
}

function goToRequestedSection() {
    // check to see if window navigated directly to #about
    if (window.location.href.substr(window.location.href.lastIndexOf('#') + 1) === 'about') {
        handleAboutClick()
    }
}

window.addEventListener("load", goToRequestedSection);
window.onscroll=function(){showNavbarOnscroll()};
portfolioLink.addEventListener('click', handlePortfolioClick, false);
aboutLink.addEventListener('click', handleAboutClick, false);