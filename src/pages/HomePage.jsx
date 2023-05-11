import styled from "styled-components";
import LogoImg from "/logo.png";
import LogoutButton from "components/LogoutButton";
import { getTasks } from "api/Models";
import Section from "components/Section";
import { Helmet } from "react-helmet-async";
import { TODO_TYPE, PROGRESS_TYPE, DONE_TYPE } from "utils/constants";

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
  const userId = 1; // 로그인 기능 보류
  const myTasks = getTasks({ userId: userId });
  // const myTasks = [];
  // const todoTasks = myTasks.filter((task) => task.type === TODO_TYPE);
  // const progressTasks = myTasks.filter((task) => task.type === PROGRESS_TYPE);
  // const doneTasks = myTasks.filter((task) => task.type === DONE_TYPE);
  console.log(myTasks);

  return (
    <>
      <Helmet>
        <title>TaskComm</title>
      </Helmet>
      <Container>
        <LogoutButton />
        <Logo src={LogoImg} alt="Logo" />
        <TaskContainer>
          <Section type={TODO_TYPE} tasks={[]} />
          <Section type={PROGRESS_TYPE} tasks={[]} />
          <Section type={DONE_TYPE} tasks={[]} />
        </TaskContainer>
      </Container>
    </>
  );
}

export default HomePage;
