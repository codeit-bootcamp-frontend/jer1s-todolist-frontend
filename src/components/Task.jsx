import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray3);
  border-radius: 1rem;
  color: var(--white);
`;

const TaskContent = styled.div`
  padding: 1rem;
`;

const Task = ({ task }) => {
  return (
    <Container>
      <TaskContent>{task.title}</TaskContent>
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
