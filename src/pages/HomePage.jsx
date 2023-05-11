import styled from "styled-components";
import LogoImg from "/logo.png";
import PhatTitle from "components/PhatTitle";
import LogoutButton from "components/LogoutButton";
import { getPosts } from "api/Models";
import SectionTodo from "components/SectionTodo";
import SectionProgress from "components/SectionProgress";
import SectionDone from "components/SectionDone";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>TaskComm</title>
      </Helmet>
      <Container>
        <LogoutButton />
        <Logo src={LogoImg} alt="Logo" />
        <TaskContainer>
          <SectionTodo />
          <SectionProgress />
          <SectionDone />
        </TaskContainer>
      </Container>
    </>
  );
}

export default HomePage;
