import styled from "styled-components";
import PropTypes from "prop-types";
import { deleteTask } from "api/Models";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray3);
  border-radius: 1rem;
  color: var(--white);

  &:hover {
    background-color: var(--gray2);
  }
`;

const TaskContent = styled.div`
  padding: 1rem;
`;

const Task = ({ task, handleLoad }) => {
  const handleContextMenu = async (e) => {
    e.preventDefault();
    await deleteTask(task.id);
    handleLoad();
  };
  return (
    <Container onContextMenu={handleContextMenu}>
      <TaskContent>{task.title}</TaskContent>
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
