import styled from "styled-components";
import LogoImg from "/logo.png";
import LogoutButton from "components/LogoutButton";
import { getPosts } from "api/Models";
import Section from "components/Section";
import { Helmet } from "react-helmet-async";
import { TODO_TYPE, DOING_TYPE, DONE_TYPE } from "utils/constants";

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
  const userId = 1;
  const myPosts = getPosts({ user_id: userId });
  console.log(myPosts);

  return (
    <>
      <Helmet>
        <title>TaskComm</title>
      </Helmet>
      <Container>
        <LogoutButton />
        <Logo src={LogoImg} alt="Logo" />
        <TaskContainer>
          <Section type={TODO_TYPE} posts={[]} />
          <Section type={DOING_TYPE} posts={[]} />
          <Section type={DONE_TYPE} posts={[]} />
        </TaskContainer>
      </Container>
    </>
  );
}

export default HomePage;
