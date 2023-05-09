import styled from "styled-components";
import PropTypes from "prop-types";

const PhatTitle = styled.div`
  text-align: center;
  border: solid ${(props) => props.color};
  border-radius: 0.8rem;
  padding: 0.6rem 0;
  width: 100%;
  color: ${(props) => props.color};
`;

PhatTitle.propTypes = {
  primary: PropTypes.bool,
  color: PropTypes.string,
};

export default PhatTitle;
