import { TRAILER_MOVIES } from "./data/trailer-movies-db.js";

export function getTrailers() {
  const $btns = document.querySelectorAll(".trailer_movie_btn");
  const onTv = TRAILER_MOVIES.filter((movie) => movie.type === "on-tv");
  getTrailer(onTv, ".trailer_movies_body");
  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      const filterCategory = btn.getAttribute("data-id");
      const movieList = TRAILER_MOVIES.filter(
        (movie) => movie.type === filterCategory
      );

      getTrailer(movieList, ".trailer_movies_body");
      btn.classList.add("active_movie");
    };
  }
}

function getTrailer(movies, selector) {
  const $trailerBody = document.querySelector(selector);
  $trailerBody.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    $trailerBody.innerHTML += `
        <div class="traler_card">
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
            <div class="trailer_card_img" style="background-image:url(${movie.img})">
                   <div class="additional_details"> 
                        <img data-id="setting" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg" alt="additional_menu" />
                   </div>
                   <div class="play_btn">
                        <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg" alt="play-button" />
                   </div>
            </div>
            <div class="trailer_card_text">
                <h3>${movie.title}</h3>
                <p>${movie.about}</p>
            </div>
        </div>
    `;
  }
}
