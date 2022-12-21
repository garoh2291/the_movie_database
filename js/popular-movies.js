import { POPULAR_MOVIES } from "./data/popular-movies.js";
import { TRENDING_MOVIES } from "./data/trending-movies-db.js";
import { getPopularity } from "./helpers/helpers.js";

export function getPopularMovies() {
  const $btns = document.querySelectorAll(".popular_movie_btn");

  const onTv = POPULAR_MOVIES.filter((movie) => movie.type === "on-tv");

  getMovies(onTv, ".popular");

  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      const filterCategory = btn.getAttribute("data-id");
      const movieList = POPULAR_MOVIES.filter(
        (movie) => movie.type === filterCategory
      );

      getMovies(movieList, ".popular");
      btn.classList.add("active_movie");
    };
  }
}

export function getTrendingMovies() {
  const $btns = document.querySelectorAll(".trending_movie_btn");
  const today = TRENDING_MOVIES.filter((movie) => movie.type === "today");
  getMovies(today, ".trending");
  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      const filterCategory = btn.getAttribute("data-id");
      const movieList = TRENDING_MOVIES.filter(
        (movie) => movie.type === filterCategory
      );

      getMovies(movieList, ".trending");
      btn.classList.add("active_movie");
    };
  }
}

function getMovies(movies, selector) {
  const $popMovieBody = document.querySelector(selector);
  $popMovieBody.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    $popMovieBody.innerHTML += `
        <div class="movie_card">
            <div class="cover_card">
            </div>
            <div class="more_settings">
                <div class="setting">
                    <p>Want to rate or add this item to a list?</p>
                    <a href="#">Login <i class='bx bxs-chevron-right'></i></a>
                </div>
                <div class="setting">
                    <p>Not a member?</p>
                    <a href="#">Sign up and join the community <i class='bx bxs-chevron-right'></i></a>
                </div>
            </div>
            <div class="movie_img" style="background-image:url(${movie.img})">
                <div class="additional_details"> 
                    <img data-id="setting" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg" alt="additional_menu" />
                </div>
                <div class="raiting_details" style="border:3px solid ${getPopularity(
                  movie.popularity
                )}">
                ${
                  movie.popularity
                    ? `<p>${movie.popularity}<sup>%</sup></p>   `
                    : "NR"
                }
                </div>
                
            </div>
            <div class="additional_details_content">
                <h2>${movie.name}</h2>
                <p>${movie.date}</p>
            </div>
        </div>
    `;
  }
}
