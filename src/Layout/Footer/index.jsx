import { Container } from "../../components/styles/Container.styled";
import { FOOTER_LINKS } from "../../data";
import { FooterNav } from "./FooterNav";
import { CommunityBtn, FooterContent, StyledFooter } from "./Footer.styled";

const { basic, involved, community, legal } = FOOTER_LINKS;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <nav>
            <div>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="Movie_db_img"
              />
              <CommunityBtn>Join the Community</CommunityBtn>
            </div>
            <FooterNav links={basic} />
            <FooterNav links={involved} />
            <FooterNav links={community} />
            <FooterNav links={legal} />
          </nav>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
