import { Container } from "../../components/styles/Container.styled";
import { NavMenu } from "../NavMenu";
import { StyledHeader } from "./styles/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavMenu />
      </Container>
    </StyledHeader>
  );
};
