import { FOOTER_LINKS } from "../../data";
import { FooterNav } from "./FooterNav";
import "./styles.css";

const { basic, involved, community, legal } = FOOTER_LINKS;

export const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer-content">
          <nav>
            <div class="join-footer">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="Movie_db_img"
              />
              <button class="community-button">Join the Community</button>
            </div>
            <FooterNav links={basic} />
            <FooterNav links={involved} />
            <FooterNav links={community} />
            <FooterNav links={legal} />
          </nav>
        </div>
      </div>
    </footer>
  );
};
