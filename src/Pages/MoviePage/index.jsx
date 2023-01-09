import { Movies } from "../../components/Movies";
import { Container } from "../../components/styles/Container.styled";
import { MovieSearchContextProvider } from "../../context/provider";
import { MovieSection } from "./MovieSection.styled";
export const MoviePage = () => {
  return (
    <MovieSearchContextProvider>
      <section>
        <Container>
          <MovieSection>
            <div>
              <h2>Popular Movies</h2>
            </div>
            <Movies />
          </MovieSection>
        </Container>
      </section>
    </MovieSearchContextProvider>
  );
};
