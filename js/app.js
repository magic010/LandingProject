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
const navbarList = document.getElementById("navbar__list");
const header = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// creating navbar links from sections id names we got from the querySelectorAll
function createNavbar() {
  let navList = "";
  for (section of sections) {
    // add html tags for list items
    // dataset.nav returns nav: section 1
    navList += `<li> <a class="nav__link menu__link" href="#${section.id}" data-nav="${section.id}" >
          ${section.dataset.nav}</a></li>`;
  }
  // add inner html to created navbar links
  navbarList.innerHTML = navList;
}
createNavbar();

// Add class 'active' to section when near top of viewport

function addActiveClass(section) {
  // get the id from the section
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.add("your-active-class");
}

//Removing the active class from the section
function removeActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("your-active-class");
}
// calculating when the section is active
function makeActiveSection() {
  for (section of sections) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // DOMRect object providing information about the size of an element and its position relative to the viewport.
    // viewport : A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed.

    let sectionViewPort = section.getBoundingClientRect();
    if (sectionViewPort.top <= 100 && sectionViewPort.bottom >= 100) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  }
}
// event listener to the dom
window.addEventListener("scroll", makeActiveSection);


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
 * disappear the header and appear again when scrolling.
 */

document.onscroll = () => {
  let isScrolling;
  header.style.display = "block";
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 5000);
};


// implemented collapsible section click event
document.querySelectorAll(".accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    // storing the collapsible content after the button is clicked
    const accordionContent = button.nextElementSibling;
    button.classList.toggle("accordion__button--active");
    if (button.classList.contains("accordion__button--active")) {
      // sets the accordion content to the default maxHeight
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + "px";
    } else {
      //hide the accordion content
      accordionContent.style.maxHeight = 0;
    }
  });
});
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
