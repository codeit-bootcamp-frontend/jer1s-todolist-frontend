import { useNavigate } from "react-router-dom";
import LinkButton from "components/LinkButton";
import styled from "styled-components";
import { logoutRequest } from "api/Accounts";

const StyledLinkButton = styled(LinkButton)`
  position: fixed;
  top: 2rem;
  right: 4rem;
  width: 8rem;
`;

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutRequest();
    navigate("/signin");
  };

  return <StyledLinkButton onClick={handleLogout}>로그아웃</StyledLinkButton>;
};

export default LogoutButton;
