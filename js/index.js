<<<<<<< HEAD
import { getLeaders } from "./leader-board.js";
import { getPopularMovies, getTrendingMovies } from "./popular-movies.js";
import { getTrailers } from "./trailers.js";
getLeaders();
getPopularMovies();
getTrendingMovies();
getTrailers();

const $menuBtn = document.querySelector(".nav-toggle");

$menuBtn.onclick = function () {
  document.querySelector(".navigation_bar").classList.toggle("open");
};

const $navButtons = document.querySelectorAll(".navigation_list > li");

console.log($navButtons);

for (let btn of $navButtons) {
  btn.onclick = function () {
    this.classList.toggle("opened_menu");
  };
}
=======
console.log("js is working");
>>>>>>> main
