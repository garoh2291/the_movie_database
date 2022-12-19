import { POPULAR_MOVIES } from "./data/popular-movies.js";
import { TRENDING_MOVIES } from "./data/trending-movies-db.js";

export function getPopularMovies() {
  const $btns = document.querySelectorAll(".popular_movie_btn");

  const onTv = POPULAR_MOVIES.filter((movie) => movie.type === "on-tv");

  getMovies(onTv, ".popular_movies_body");

  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      console.log(btn.getAttribute("data-id"));
      const filterCategory = btn.getAttribute("data-id");
      const movieList = POPULAR_MOVIES.filter(
        (movie) => movie.type === filterCategory
      );

      console.log(movieList);
      getMovies(movieList, ".popular_movies_body");
      btn.classList.add("active_movie");
    };
  }
}

export function getTrendingMovies() {
  const $btns = document.querySelectorAll(".trending_movie_btn");
  const today = TRENDING_MOVIES.filter((movie) => movie.type === "today");
  getMovies(today, ".trending_movies_body");
  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      console.log(btn.getAttribute("data-id"));
      const filterCategory = btn.getAttribute("data-id");
      const movieList = TRENDING_MOVIES.filter(
        (movie) => movie.type === filterCategory
      );

      console.log(movieList);
      getMovies(movieList, ".trending_movies_body");
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
            <div class="movie_img" style="background-image:url(${movie.img})">
                <div class="additional_details"> 
                    <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg" alt="additional_menu" />
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

function getPopularity(num) {
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
