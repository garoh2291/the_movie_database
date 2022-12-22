import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { removeSetting } from "./helpers";
import { Header } from "./Layout/Header";
import { RouteComponent } from "./Routes";

function App() {
  window.onclick = function (e) {
    if (e.target.getAttribute("data-id") === "setting") {
      removeSetting(e, document.querySelectorAll(".movie_card_box"));
      const addBtn = e.target.parentElement.parentElement.parentElement;
      addBtn.classList.toggle("open_settings");
    } else {
      removeSetting(e, document.querySelectorAll(".movie_card_box"));
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
