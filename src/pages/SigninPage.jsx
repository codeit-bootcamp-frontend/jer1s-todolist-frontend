import { Helmet } from "react-helmet-async";
import Account from "components/Account";

function SigninPage() {
  return (
    <>
      <Helmet>
        <title>로그인 | TaskComm</title>
      </Helmet>
      <Account isSignin={true}></Account>
    </>
  );
}

export default SigninPage;
