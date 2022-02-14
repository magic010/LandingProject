/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const header = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Building the Navigation content

const buildNavBarLinks = () => {
  for (const section of sections) {

    const ul = document.querySelector('ul#navbar__list');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = section.getAttribute('data-nav');
    a.setAttribute('class', 'menu__link');

    a.href = `#${section.id}`;
    li.appendChild(a);
    ul.appendChild(li);
  }

};
//invoking the buildNavBarLinks function
buildNavBarLinks();


// toggle class 'active' to section when the viewport

function toggleActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.toggle("active");
}
// calculating when the section is active
function activeSection() {
  for (section of sections) {
    let sectionViewPort = section.getBoundingClientRect();
    (sectionViewPort.top <= 150 && sectionViewPort.bottom >= 150) && (!section.classList.has("active")) ? toggleActiveClass(section)
      : toggleActiveClass(section)
  }
}
// event listener to the dom
window.addEventListener("scroll", activeSection);


//Scroll to section when Navbar link is clicked

const sectionLinks = document.querySelectorAll('a[href^="#"]');
for (sectionLink of sectionLinks) {
  sectionLink.addEventListener("click", function (e) {

    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
};





/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
