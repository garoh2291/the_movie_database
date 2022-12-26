import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { removeSetting } from "./helpers";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { RouteComponent } from "./Routes";

function App() {
  window.onclick = function (e) {
    //close opened menus
    if (e.target.getAttribute("data-id") === "setting") {
      removeSetting(e, document.querySelectorAll(".movie-card-box"));
      const addBtn = e.target.parentElement.parentElement.parentElement;
      addBtn.classList.toggle("open-settings");
    } else {
      removeSetting(e, document.querySelectorAll(".movie-card-box"));
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteComponent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
