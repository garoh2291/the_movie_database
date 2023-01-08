import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./components/styles/App.styled";
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
