import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import LogoImg from "/logo.png";
import { getTasks } from "api/Models";
import { TODO_TYPE, PROGRESS_TYPE, DONE_TYPE } from "utils/constants";
import LogoutButton from "components/LogoutButton";
import TaskSection from "components/TaskSection";

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
  gap: 1.5rem;
  max-width: 100rem;
`;

const Description = styled.p``;

function HomePage() {
  const [userId, setUserId] = useState(1);
  const [todoTasks, setTodoTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleLoad = async () => {
    const result = await getTasks({ userId: userId });
    const todoResult = result.filter((task) => task.section === TODO_TYPE);
    const progressResult = result.filter(
      (task) => task.section === PROGRESS_TYPE
    );
    const doneResult = result.filter((task) => task.section === DONE_TYPE);
    setTodoTasks(todoResult);
    setProgressTasks(progressResult);
    setDoneTasks(doneResult);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Helmet>
        <title>TaskComm</title>
      </Helmet>
      <Container>
        <LogoutButton />
        <Logo src={LogoImg} alt="Logo" />
        <Description>삭제: 우클릭</Description>
        <TaskContainer>
          <TaskSection
            type={TODO_TYPE}
            tasks={todoTasks}
            userId={userId}
            handleLoad={handleLoad}
          />
          <TaskSection
            type={PROGRESS_TYPE}
            tasks={progressTasks}
            userId={userId}
            handleLoad={handleLoad}
          />
          <TaskSection
            type={DONE_TYPE}
            tasks={doneTasks}
            userId={userId}
            handleLoad={handleLoad}
          />
        </TaskContainer>
      </Container>
    </>
  );
}

export default HomePage;
