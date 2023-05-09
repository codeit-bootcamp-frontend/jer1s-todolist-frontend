import styled from "styled-components";
import LogoImg from "/logo.png";
import { Link } from "react-router-dom";
import LinkButton from "components/LinkButton";

const Container = styled.div`
  margin-top: 4rem;
`;

const Logo = styled.img`
  display: block;
  width: 40rem;
  object-fit: contain;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 1rem;
  margin-left: 1rem;
  width: 10rem;
`;

function HomePage() {
  return (
    <Container>
      <Link to="/">
        <Logo src={LogoImg} alt="Logo" />
      </Link>
      <Link to="/signin">
        <StyledLinkButton>로그인</StyledLinkButton>
      </Link>
      <Link to="/signup">
        <StyledLinkButton>회원가입</StyledLinkButton>
      </Link>
    </Container>
  );
}

export default HomePage;
