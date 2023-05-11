import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: var(--black);
  color: var(--white);
`;

const Task = ({ task }) => {
  return (
    <Container>
      <p>{task.title}</p>
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
