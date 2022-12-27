import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./components/styles/App.styled";
// import "./App.css";
import GlobalSyles from "./Global";
import { removeSetting } from "./helpers";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { RouteComponent } from "./Routes";

const theme = {
  colors: {
    header: "rgb(var(--tmdbDarkBlue))",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "980px",
};

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
      <ThemeProvider theme={theme}>
        <GlobalSyles />
        <StyledApp>
          <Header />
          <RouteComponent />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
