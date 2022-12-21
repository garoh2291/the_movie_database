export function getSizeWeekly(count) {
  if (count > 10000) {
    return 100;
  } else {
    return Math.floor(count / 100);
  }
}

export function getSizeAllTime(count) {
  if (count > 1000000) {
    return 100;
  } else {
    return Math.floor(count / 10000);
  }
}

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

export function removeSetting(e, movies, trailers) {
  for (let card of movies) {
    card.classList.remove("open_settings");
  }
  for (let card of trailers) {
    card.classList.remove("open_settings");
  }
  if (e.target.parentElement.className !== "auth_btn") {
    document.querySelector(".auth_content_mobile").classList.remove("visible");
  }
}
