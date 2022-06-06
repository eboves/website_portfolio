const sections = document.querySelectorAll("section");
const nav_ul = document.getElementById("nav-ul-id");

function gen_nav_list() {
  sections.forEach((section) => {
    nav_ul.innerHTML += `<li><a class="nav-links atag ibm" href="#${section.id}">${section.dataset.nav}</a></li>`;
  });
}

gen_nav_list();
