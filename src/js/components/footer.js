// Footer
const footer = async () => {
  // Fetch the footer from the template file
  const response = await fetch("/templates/footer.html");
  const footerHTML = await response.text();

  // Insert the contents of the source file into the target element
  document.querySelector("main").insertAdjacentHTML("afterend", footerHTML);
};

footer();

export default footer;
