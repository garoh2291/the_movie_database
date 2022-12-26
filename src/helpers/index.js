export function getPopularity(num) {
  if (num > 70) {
    return "green";
  } else if (num > 40 && num <= 70) {
    return "yellow";
  } else if (num <= 40 && num > 0) {
    return "red";
  } else {
    return "#c7c7c7";
  }
}

export function removeSetting(e, movies) {
  for (let card of movies) {
    card.classList.remove("open-settings");
  }

  if (
    e.target.parentElement &&
    e.target.parentElement.className !== "auth_btn"
  ) {
    document.querySelector(".auth-content-mobile").classList.remove("visible");
  }
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
