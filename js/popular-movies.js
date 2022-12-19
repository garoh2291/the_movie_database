export function getPopularMovies() {
  const $btns = document.querySelectorAll(".pop_movie_change");

  for (let btn of $btns) {
    btn.onclick = function () {
      for (let btn of $btns) {
        btn.classList.remove("active_movie");
      }
      console.log(btn.getAttribute("data-id"));
      btn.classList.add("active_movie");
    };
  }
}
