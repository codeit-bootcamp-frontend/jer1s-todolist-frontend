import { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { patchTask, deleteTask } from "api/Models";

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

const Input = styled.input`
  background-color: inherit;
  padding: 1rem;
  border: none;
  outline: none;
  color: var(--white);
`;

const Task = ({ task, handleLoad }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const formRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handlePatch = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    await patchTask(task.id, { title: taskTitle });
    handleLoad();
  };

  const handleContextMenu = async (e) => {
    e.preventDefault();
    await deleteTask(task.id);
    handleLoad();
  };

  return (
    <Container onClick={handleClick} onContextMenu={handleContextMenu}>
      {isEditing ? (
        <form ref={formRef} onSubmit={handlePatch} onBlur={handlePatch}>
          <Input
            id="title"
            name="title"
            type="text"
            autoFocus
            onChange={handleChange}
            defaultValue={task.title}
          />
          {/* <input
            id="comment"
            name="comment"
            type="text"
            defaultValue={task.comment}
          /> */}
        </form>
      ) : (
        <TaskContent>{task.title}</TaskContent>
      )}
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
