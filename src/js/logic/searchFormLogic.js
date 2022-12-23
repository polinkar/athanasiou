const searchFormLogic = () => {
  const searchFormInput = document.querySelector(".search-form__input");
  const searchFormButton = document.querySelector(".search-form__button");

  // Prevent searching for empty string
  searchFormInput.addEventListener("input", (e) => {
    let hasText = e.target.value != "";
    searchFormButton.style.cursor = hasText ? "pointer" : "auto";
    searchFormButton.setAttribute("type", hasText ? "submit" : "button");
  });
};

export default searchFormLogic;
