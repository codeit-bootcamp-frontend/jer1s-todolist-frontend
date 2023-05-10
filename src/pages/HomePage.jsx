import styled from "styled-components";
import LogoImg from "/logo.png";
import PhatTitle from "components/PhatTitle";
import isValidAccessToken from "utils/isValidAccessToken";
import LinkButton from "components/LinkButton";

const Container = styled.div`
  margin-top: 6rem;
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
  max-width: 80rem;
`;

const StyledLinkButton = styled(LinkButton)`
  position: fixed;
  right: 4rem;
  width: 8rem;
`;

function HomePage() {
  const user = isValidAccessToken();

  return (
    <Container>
      <StyledLinkButton>로그아웃</StyledLinkButton>
      <Logo src={LogoImg} alt="Logo" />
      <TaskContainer>
        <PhatTitle color="var(--primary)">To do</PhatTitle>
        <PhatTitle color="var(--red)">In Progress</PhatTitle>
        <PhatTitle color="var(--primary-gray)">Done</PhatTitle>
      </TaskContainer>
    </Container>
  );
}

export default HomePage;
