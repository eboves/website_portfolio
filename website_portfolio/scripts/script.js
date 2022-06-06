const sections = document.querySelectorAll("section");
const nav_ul = document.getElementById("nav-ul-id");
const btn_nav_el = document.querySelector(".btn-nav");
const header = document.querySelector(".header");
const btn_resume = document.getElementById("btn-resume");
const LINK_TO_RESUME =
  "https://drive.google.com/file/d/1XxjLRL-bVNVYnbfmADa5OKG8Wza8nnAp/view?usp=sharing";

btn_resume.addEventListener("click", function () {
  window.open(LINK_TO_RESUME, "_blank");
});

function gen_nav_list() {
  sections.forEach((section) => {
    nav_ul.innerHTML += `<li><a class="nav-links atag ibm" href="#${section.id}">${section.dataset.nav}</a></li>`;
  });
}

gen_nav_list();

// This code opens/closes the nav bar on smaller divices
function open_nav() {
  btn_nav_el.addEventListener("click", function () {
    header.classList.toggle("nav-open");
    console.log("I was clicked");
  });
}

open_nav();

function smooth_scrolling(anchor) {
  document.querySelector(anchor.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

// This function select all the a tags and make a smooth scrolling motion
// when you click on the section tag on the nav
function section_click() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smooth_scrolling(anchor);
      header.classList.remove("nav-open");
    });
  });
}
// calling the section_click function
section_click();
