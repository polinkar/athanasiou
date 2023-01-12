import breakpoints from "../helpers/breakpoints.js";
import searchFormLogic from "../logic/searchFormLogic.js";
import calcHeight from "../logic/calcHeight.js";
import {
  changeToggleShape,
  responsiveMainMenu,
} from "../logic/mobileMenuLogic.js";

// Header
const header = async () => {
  // Fetch the header from the template file
  const response = await fetch("/templates/header.html");
  const headerHTML = await response.text();

  // Insert the contents of the source file into the target element
  document.querySelector("main").insertAdjacentHTML("beforebegin", headerHTML);

  //////////////////////////////////////////////////////////////////////////////////////////
  // The following code is asynchronous because we are getting the header dynamically. ////
  // We have to take it out from here before deploying it to WordPress, otherwise we  ////
  // will not have access to header's variables. ////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  // Variables that belong to header must be declared here and not in each module
  const headerElement = document.querySelector(".header");
  const firstSection = document.querySelector("[first-section]");

  const hamburger = document.querySelector(".hamburger");
  const mainMenuList = document.querySelector(".main-menu__list");

  const searchForm = document.querySelector(".search-form");
  const languageSwitcher = document.querySelector(".language-switcher");

  calcHeight(headerElement, firstSection, 80);

  searchFormLogic();
  changeToggleShape(hamburger, mainMenuList);

  if (mainMenuList.classList.contains("main-menu__list--open"))
    document.querySelector(".main").display = "none;";

  // Responsive
  // Call listener function at run time
  responsiveMainMenu(
    breakpoints.mdMax,
    hamburger,
    mainMenuList,
    searchForm,
    languageSwitcher
  );

  // Attach listener function on state changes
  breakpoints.mdMax.addEventListener("change", function () {
    responsiveMainMenu(
      breakpoints.mdMax,
      hamburger,
      mainMenuList,
      searchForm,
      languageSwitcher
    );
  });

  // Check if the user is scrolling
  let lastScrollPosition = 0;

  // Reveal Header on Scroll
  const revealHeaderonScroll = function (header) {
    const distanceFromTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Scrolling down
    if (distanceFromTop > lastScrollPosition) {
      header.style.transform = `translateY(-${
        header.getBoundingClientRect().height
      }px)`;
    }
    // Scrolling Up
    else {
      header.style.transform = "translateY(0)";
      header.classList.add("header--scroll");
    }

    // Reset
    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;

    // We are at the Top
    if (distanceFromTop == 0) {
      console.log("We are at the top");
      header.classList.remove("header--scroll");
    }
  };

  window.addEventListener(
    "scroll",
    function () {
      revealHeaderonScroll(headerElement);
    },
    false
  );
};

header();

export default header;
