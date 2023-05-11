import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notFound from "assets/not-found.png";
import LinkButton from "components/LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem;
    color: var(--primary);
  }

  h3 {
    margin: 0rem;
    color: var(--primary-gray);
  }
`;

const Image = styled.img`
  width: 10rem;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 5rem;
  width: 30rem;
`;

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 NotFound | TaskComm</title>
      </Helmet>
      <Container>
        <Image src={notFound} alt="404 Not Found Image" />
        <h2>페이지를 찾을 수 없습니다</h2>
        <h3>페이지의 주소를 잘못 입력하였거나</h3>
        <h3>
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </h3>
        <Link to="/">
          <StyledLinkButton>홈으로</StyledLinkButton>
        </Link>
      </Container>
    </>
  );
}

export default NotFoundPage;
