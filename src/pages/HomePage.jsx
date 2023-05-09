import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "utils/getToken";
import LogoImg from "/logo.png";

const Container = styled.div`
  margin-top: 4rem;
`;

const Logo = styled.img`
  display: block;
  height: 6rem;
  margin: 0 auto;
  object-fit: contain;
`;

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      navigate("/signin");
    }
  }, []);
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo" />
    </Container>
  );
}

export default HomePage;
