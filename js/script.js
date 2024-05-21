const contactSection = document.querySelector(".contact");
const educationSection = document.querySelector(".education");
const projectsSection = document.querySelector(".projects");
const aboutSection = document.querySelector(".about");

const sectionsArray = [
    aboutSection,
    educationSection,
    projectsSection,
    contactSection
];

function controlNavBar(buttonIndex) {
  toggleNavBar(buttonIndex);
  controlSectionsVisibility(buttonIndex);
}

function toggleNavBar(buttonIndex) {
  const navBar = document.querySelector(".navigation-bar");
  const navBarButtons = navBar.querySelectorAll("button");

  for (const element of navBarButtons) {
    element.classList.remove("navigation-bar-button-active");
  }

  navBarButtons[buttonIndex].classList.add("navigation-bar-button-active");
}

function controlSectionsVisibility(buttonIndex) {
    for (const section of sectionsArray) {
        section.classList.remove("displayOn");
        section.classList.add("displayOff");
    }
    sectionsArray[buttonIndex].classList.remove("displayOff");
    sectionsArray[buttonIndex].classList.add("displayOn");
}
