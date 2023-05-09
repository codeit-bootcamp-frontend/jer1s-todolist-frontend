import styled from "styled-components";
import LogoImg from "/logo.png";
import { Link } from "react-router-dom";
import LinkButton from "components/LinkButton";

const Container = styled.div`
  margin-top: 4rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  display: block;
  height: 6rem;
  margin: 0 auto;
  object-fit: contain;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 10rem;
  margin-left: 1rem;
  width: 10rem;
`;

function HomePage() {
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo" />
      <LinkContainer>
        <Link to="/signin">
          <StyledLinkButton>로그인</StyledLinkButton>
        </Link>
        <Link to="/signup">
          <StyledLinkButton>회원가입</StyledLinkButton>
        </Link>
      </LinkContainer>
    </Container>
  );
}

export default HomePage;
