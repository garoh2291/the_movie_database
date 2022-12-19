import { getLeaders } from "./leader-board.js";
import { getPopularMovies, getTrendingMovies } from "./popular-movies.js";
import { getTrailers } from "./trailers.js";
getLeaders();
getPopularMovies();
getTrendingMovies();
getTrailers();

const $menuBtn = document.querySelector(".nav-toggle");

$menuBtn.onclick = function () {
  this.classList.toggle("open");
};
