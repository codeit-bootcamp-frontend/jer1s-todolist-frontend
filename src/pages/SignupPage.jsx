import { Helmet } from "react-helmet-async";
import Account from "components/Account";

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>회원가입 | TaskComm</title>
      </Helmet>
      <Account></Account>
    </>
  );
}

export default SignupPage;
