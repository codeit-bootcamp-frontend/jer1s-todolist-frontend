import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "utils/getToken";
import LogoImg from "/logo.png";
import PhatTitle from "components/PhatTitle";

const Container = styled.div`
  margin-top: 4rem;
`;

const Logo = styled.img`
  display: block;
  height: 6rem;
  margin: 0 auto;
  object-fit: contain;
`;

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20rem;
  margin: 10rem auto;
  max-width: 80rem;
`;

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isloginned = isValidAccessToken();
    console.log(isloginned);
    if (!isloginned) {
      navigate("/signin");
    }
  }, []);

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo" />
      <TaskContainer>
        <PhatTitle color="blue">To do</PhatTitle>
        <PhatTitle color="red">In Progress</PhatTitle>
        <PhatTitle color="gray">Done</PhatTitle>
      </TaskContainer>
    </Container>
  );
}

export default HomePage;
