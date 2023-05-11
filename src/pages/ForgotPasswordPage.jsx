import LinkButton from "components/LinkButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountInput from "components/AccountInput";

const Container = styled.div`
  margin: 24rem auto;
  max-width: 40rem;
  text-align: center;

  @media (max-width: 767px) {
    max-width: 46.4rem;
    margin: 0 auto;
    padding: 12rem 3.2rem 10rem;
  }
`;

const Logo = styled.img`
  width: 21rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>비밀번호 찾기 | TaskComm</title>
      </Helmet>
      <Container>
        <Link to="/">
          <Logo src="logo.png" alt="Linkbrary Logo" />
        </Link>
        <Form>
          <AccountInput value="email" type="email" />
          <LinkButton type="submit">비밀번호 찾기</LinkButton>
        </Form>
      </Container>
    </>
  );
}

export default ForgotPasswordPage;
