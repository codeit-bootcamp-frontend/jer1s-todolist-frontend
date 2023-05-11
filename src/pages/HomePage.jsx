import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import LogoImg from "/logo.png";
import { getTasks } from "api/Models";
import { TODO_TYPE, PROGRESS_TYPE, DONE_TYPE } from "utils/constants";
import LogoutButton from "components/LogoutButton";
import Section from "components/Section";

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
  const [userId, setUserId] = useState(1);
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    const data = getTasks({ userId: userId });
    setMyTasks(data);
    console.log(data);
  }, []);

  useEffect;
  // const myTasks = [];
  // const todoTasks = myTasks.filter((task) => task.type === TODO_TYPE);
  // const progressTasks = myTasks.filter((task) => task.type === PROGRESS_TYPE);
  // const doneTasks = myTasks.filter((task) => task.type === DONE_TYPE);

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
