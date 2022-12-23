// Change Toggle Shape (from Hamburger to X)
const changeToggleShape = function (toggle, menu) {
  toggle.addEventListener("click", function () {
    let isOpen = toggle.getAttribute("data-open");
    if (isOpen === "false") {
      toggle.classList.add("hamburger--open");
      menu.classList.remove("main-menu__list--closed");
      menu.classList.add("main-menu__list--open");
      document.querySelector("main").classList.add("main--menu-open");
      console.log("Menu Opened");
    } else {
      toggle.classList.remove("hamburger--open");
      menu.classList.add("main-menu__list--closed");
      menu.classList.remove("main-menu__list--open");

      document.querySelector("main").classList.remove("main--menu-open");
      console.log("Menu Closed");
    }
    toggle.setAttribute("data-open", isOpen === "false" ? "true" : "false");
  });
};

// const showHideMenu = function (menu) {
//   menu.classList.toggle("main-menu__list--closed");
//   menu.classList.toggle("main-menu__list--open");
// };

// Hide Toggle button (Hamburger) on Desktop
const responsiveMainMenu = function (
  mediaQuery,
  toggle,
  menu,
  searchForm,
  languageSwitcher
) {
  const searchAndLanguage = document.createElement("div");
  searchAndLanguage.classList.add("search-and-language");

  if (mediaQuery.matches) {
    menu.classList.remove("main-menu__list--open");
    menu.classList.add("main-menu__list--closed");
    toggle.style.display = "flex";
    toggle.classList.remove("hamburger--open");

    searchAndLanguage.appendChild(searchForm);
    searchAndLanguage.appendChild(languageSwitcher);
    menu.appendChild(searchAndLanguage);

    console.log(searchAndLanguage);
  } else {
    toggle.style.display = "none";
    menu.classList.remove("main-menu__list--closed");
    menu.classList.add("main-menu__list--open");
    document.querySelector("main").classList.remove("main--menu-open");

    if (document.querySelector(".search-and-language")) {
      document.querySelector(".header__container").appendChild(searchForm);
      document
        .querySelector(".header__container")
        .appendChild(languageSwitcher);
      document.querySelector(".search-and-language").remove();
    }
  }

  // menu.style.display = !mediaQuery.matches ? "flex" : "none";}
};

export { changeToggleShape, responsiveMainMenu };
