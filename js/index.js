import { removeSetting } from "./helpers/helpers.js";
import { getLeaders } from "./leader-board.js";
import { getPopularMovies, getTrendingMovies } from "./popular-movies.js";
import { getTrailers } from "./trailers.js";
getLeaders();
getPopularMovies();
getTrendingMovies();
getTrailers();

const $menuBtn = document.querySelector(".nav-toggle");
const $loginBtn = document.querySelector(".auth_btn");

$menuBtn.onclick = function () {
  document.querySelector(".navigation_bar").classList.toggle("open");
};

const $navButtons = document.querySelectorAll(".navigation_list > li");

for (let btn of $navButtons) {
  btn.onclick = function () {
    this.classList.toggle("opened_menu");
  };
}

window.onclick = function (e) {
  const $movieCard = document.querySelectorAll(".movie_card");
  const $trailerCard = document.querySelectorAll(".traler_card");
  if (e.target.getAttribute("data-id") === "setting") {
    removeSetting(e, $movieCard, $trailerCard);
    const addBtn = e.target.parentElement.parentElement.parentElement;
    addBtn.classList.toggle("open_settings");
  } else {
    removeSetting(e, $movieCard, $trailerCard);
  }
};

$loginBtn.onclick = function () {
  document.querySelector(".auth_content_mobile").classList.add("visible");
};
