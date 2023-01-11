const calcHeight = (transparentEl, firstSection, offset = 0) => {
  firstSection.style.paddingTop = `${
    transparentEl.getBoundingClientRect().height + offset
  }px`;
};

export default calcHeight;
