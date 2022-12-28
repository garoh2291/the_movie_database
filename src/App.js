import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./components/styles/App.styled";
import { MenuContext } from "./context";
import GlobalSyles from "./Global";
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
  const { setIsAuthVisible, setIsAdditional } = useContext(MenuContext);

  window.onclick = function (e) {
    //close opened menus

    if (e.target.getAttribute("data-id") !== "auth") {
      setIsAuthVisible(false);
    }

    if (e.target.getAttribute("data-id") !== "setting") {
      setIsAdditional("");
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
