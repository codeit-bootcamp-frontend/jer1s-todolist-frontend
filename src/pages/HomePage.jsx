import styled from "styled-components";
import LogoImg from "/logo.png";
import PhatTitle from "components/PhatTitle";
import LogoutButton from "components/LogoutButton";
import { getPosts } from "api/Models";

const Container = styled.div`
  margin: 6rem;
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
  margin: 10rem auto;
  max-width: 100rem;
`;

function HomePage() {
  // 로그인 기능 보류
  const userId = 34;
  const myPosts = getPosts();

  return (
    <Container>
      <LogoutButton />
      <Logo src={LogoImg} alt="Logo" />
      <TaskContainer>
        <PhatTitle color="var(--primary)">To do</PhatTitle>
        <PhatTitle color="var(--red)">Doing</PhatTitle>
        <PhatTitle color="var(--primary-gray)">Done</PhatTitle>
      </TaskContainer>
    </Container>
  );
}

export default HomePage;
