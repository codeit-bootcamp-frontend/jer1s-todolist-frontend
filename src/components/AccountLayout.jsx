import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  margin: 24rem auto;
  max-width: 40rem;
  text-align: center;

  @media (max-width: 767px) {
    max-width: 46.4rem;
    margin: 0 auto;
    padding: 12rem 3.2rem 10rem;
  }
`;

function AccountLayout() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AccountLayout;
