import styled from "styled-components";
import LogoImg from "/logo.png";
import PhatTitle from "components/PhatTitle";
import isValidAccessToken from "utils/isValidAccessToken";

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
  const user = isValidAccessToken;
  console.log(user);

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
