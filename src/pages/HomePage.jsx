import styled from "styled-components";
import LogoImg from "/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 4rem;
`;

const Logo = styled.img`
  width: 40rem;
  object-fit: contain;
  text-align: center;
`;

function HomePage() {
  return (
    <Container>
      <Link to="/">
        <Logo src={LogoImg} alt="Logo" />
      </Link>
    </Container>
  );
}

export default HomePage;
