// const hamburger = document.getElementById('js-buttonHamburger');
// const navUL = document.getElementById('mobile-navlist');

// hamburger.addEventListener('click',() =>{
//   navUL.classList.toggle('show');

// });


// document.body.classList.toggle('js-enabled')
// document.addEventListener('DOMContentLoaded', function(event){

// let ken = document.getElementById('hamburger')  
// ken.setAttribute('aria-expanded','false')
// ken.onclick = function(){
//   if(this.getAttribute('aria-expanded') == 'false')
//   {
// this.setAttribute('aria-expanded' ,'true');
//   }else{
//     this.setAttribute('aria-expanded' ,'false');
//   }}});

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");


menuIcon.addEventListener("click",() => {
navbar.classList.toggle("change");
nav.classList.toggle("change");

});

document.body.classList.toggle('js-enabled')
document.addEventListener('DOMContentLoaded', function(event){

let ken = document.querySelector('.hamburger-menu')  
ken.setAttribute('aria-expanded','false')
ken.onclick = function(){
  if(this.getAttribute('aria-expanded') == 'false')
  {
this.setAttribute('aria-expanded' ,'true');
  }else{
    this.setAttribute('aria-expanded' ,'false');
  }}});

