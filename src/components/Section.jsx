import styled from "styled-components";
import PhatTitle from "components/PhatTitle";
import addButtonImg from "assets/add-button.png";
import { TODO_TYPE, PROGRESS_TYPE, DONE_TYPE } from "utils/constants";
import PropTypes from "prop-types";

const AddButton = styled.img`
  cursor: pointer;
  border-radius: 1rem;
  width: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Section = ({ type, tasks }) => {
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
      <AddButton src={addButtonImg} alt="Add Button" />
    </Container>
  );
};

Section.propTypes = {
  type: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Section;
