import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isValidEmail, isValidPassword } from "utils/validators";
import AccountInput from "components/AccountInput";
import LinkButton from "components/LinkButton";
import { getUsers, addUser } from "api/Models";
import { loginRequest } from "api/Accounts";

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

const Logo = styled.img`
  width: 21rem;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: 600;
  color: var(--primary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

const ForgotPassword = styled.div`
  margin-top: 1.6rem;
  font-size: 1.4rem;
  * {
    color: var(--gray1);
  }
`;

function Account({ isSignin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleBlur = async (e) => {
    if (e.target.name === "email") {
      switch (true) {
        case email === "":
          break;
        case !isValidEmail(email):
          alert("올바른 이메일 형식이 아닙니다.");
          break;
        default:
          if (!isSignin) {
            try {
              const users = await getUsers();
              const user = users.find((user) => user.email === email);
              if (user) {
                alert("이미 사용 중인 이메일입니다.");
              }
            } catch (err) {
              console.error(err);
            }
          }
          break;
      }
    } else if (e.target.name === "password") {
      switch (true) {
        case password === "":
          break;
        case !isValidPassword(password):
          alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
          break;
        case confirmPassword !== "" && password !== confirmPassword:
          alert("비밀번호가 일치하지 않습니다.");
          break;
        default:
          break;
      }
    } else if (e.target.name === "password2") {
      switch (true) {
        case confirmPassword === "":
          break;
        case !isValidPassword(confirmPassword):
          alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
          break;
        case password !== "" && password !== confirmPassword:
          alert("비밀번호가 일치하지 않습니다.");
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignin) {
      try {
        const users = await getUsers();
        const user = users.find((user) => user.email === email);

        if (user) {
          const response = await loginRequest(user.id, password);
          if (response) {
            navigate("/");
          } else {
            alert("이메일과 비밀번호를 확인해주세요.");
          }
        } else {
          alert("이메일과 비밀번호를 확인해주세요.");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      switch (true) {
        case email === "":
          alert("이메일을 입력해 주세요.");
          break;
        case !isValidEmail(email):
          alert("올바른 이메일 형식이 아닙니다.");
          break;
        case password === "" || confirmPassword === "":
          alert("비밀번호를 입력해 주세요.");
          break;
        case !isValidPassword(password) || !isValidPassword(confirmPassword):
          alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
          break;
        case password !== confirmPassword:
          alert("비밀번호가 일치하지 않습니다.");
          break;
        default:
          try {
            const users = await getUsers();
            const user = users.find((user) => user.email === email);

            if (user) {
              alert("이미 사용 중인 이메일입니다.");
            } else {
              const { id } = await addUser({ email, password });
              const response = await loginRequest(id, password);

              if (response) {
                navigate("/");
              } else {
                alert("로그인에 실패했습니다.");
              }
            }
          } catch (err) {
            console.error(err);
          }
          break;
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordToggler = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const handlePassword2Toggler = (e) => {
    e.preventDefault();
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <Container>
      <Link to="/">
        <Logo src="logo.png" alt="Linkbrary Logo" />
      </Link>
      <p>
        {isSignin ? "회원이 아니신가요? " : "이미 회원이신가요? "}
        <StyledLink to={isSignin ? "/signup" : "/signin"}>
          {isSignin ? "회원 가입하기" : "로그인 하기"}
        </StyledLink>
      </p>
      <Form onSubmit={handleSubmit}>
        <AccountInput
          value="email"
          type="email"
          handleBlur={isSignin ? null : handleBlur}
          handleChange={handleChange}
        />
        <AccountInput
          value="password"
          type={showPassword ? "text" : "password"}
          showPassword={showPassword}
          handleBlur={isSignin ? null : handleBlur}
          handleChange={handleChange}
          handlePasswordToggler={handlePasswordToggler}
        />
        {isSignin || (
          <AccountInput
            value="password"
            type={showPassword2 ? "text" : "password"}
            showPassword={showPassword2}
            isConfirmPassword={true}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handlePasswordToggler={handlePassword2Toggler}
          />
        )}
        <LinkButton type="submit">
          {isSignin ? "로그인" : "회원가입"}
        </LinkButton>
      </Form>
      <ForgotPassword>
        {isSignin && <Link to="/forgot-password">비밀번호 찾기</Link>}
      </ForgotPassword>
    </Container>
  );
}

export default Account;
