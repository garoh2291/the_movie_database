import { Movies } from "../../components/Movies";
import "./styles.css";
export const MoviePage = () => {
  return (
    <section>
      <div className="container">
        <div className="movies_section">
          <div className="movies_title">
            <h2>Popular Movies</h2>
          </div>
          <Movies />
        </div>
      </div>
    </section>
  );
};
