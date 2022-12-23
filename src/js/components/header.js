import breakpoints from "../helpers/breakpoints.js";
import searchFormLogic from "../logic/searchFormLogic.js";
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
  const hamburger = document.querySelector(".hamburger");
  const mainMenuList = document.querySelector(".main-menu__list");
  const searchForm = document.querySelector(".search-form");
  const languageSwitcher = document.querySelector(".language-switcher");

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
};

header();

export default header;
