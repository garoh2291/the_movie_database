import { Movies } from "../../components/Movies";
import { MovieSearchContextProvider } from "../../context/provider";
import "./styles.css";
export const MoviePage = () => {
  return (
    <MovieSearchContextProvider>
      <section>
        <div className="container">
          <div className="movies-section">
            <div className="movies-title">
              <h2>Popular Movies</h2>
            </div>
            <Movies />
          </div>
        </div>
      </section>
    </MovieSearchContextProvider>
  );
};
