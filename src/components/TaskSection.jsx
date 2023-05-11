import PropTypes from "prop-types";
import styled from "styled-components";
import { TODO_TYPE, PROGRESS_TYPE, DONE_TYPE } from "utils/constants";
import addButtonImg from "assets/add-button.png";
import PhatTitle from "components/PhatTitle";
import Task from "components/Task";

const AddButton = styled.img`
  cursor: pointer;
  border-radius: 2rem;
  width: 1.5em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TaskSection = ({ type, tasks }) => {
  let titleColor = "";
  let titleText = "";
  switch (type) {
    case TODO_TYPE:
      titleColor = "var(--primary)";
      titleText = "To do";
      break;
    case PROGRESS_TYPE:
      titleColor = "var(--red)";
      titleText = "Doing";
      break;
    case DONE_TYPE:
      titleColor = "var(--primary-gray)";
      titleText = "Done";
      break;
  }
  return (
    <Container>
      <PhatTitle color={titleColor}>{titleText}</PhatTitle>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <AddButton src={addButtonImg} alt="Add Button" />
    </Container>
  );
};

TaskSection.propTypes = {
  type: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TaskSection;
