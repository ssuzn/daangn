import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      if (name === "password") {
          setPassword(value);
      }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginProcess = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email을 입력하세요.");
      return;
    }

    if (!password) {
      alert("Password를 입력하세요.");
      return;
    } 

    if (!/^[\w-.]+@[A-Za-z\d-]+\.[A-Za-z]{2,}$/.test(email)) {
      alert("유효한 이메일 형식이 아닙니다.");
      return;
    }

    if (!/^[a-z\d!@*&-_]{8,16}$/.test(password)) {
      alert("8~16자의 영소문자, 숫자,!@*&-_만 입력 가능합니다.");
      return;
    }
    
    const storedEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedEmails.includes(email)) {
      alert("회원 정보가 없습니다. 회원가입을 해주세요.");
      return;
    }

    if (storedUserData.email ===  email && storedUserData.password === password) {
      dispatch(login({ email, username: storedUserData.username })); // 로그인 상태 업데이트
      alert(`반가워요. ${storedUserData.username} 님!`);
      navigate("/");
    } else {
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <React.Fragment>
      <DIV>
        <Title>🥕 로그인을 해주세요.</Title>
        <LoginForm onSubmit={loginProcess}>
          <Input
            type="text"
            placeholder="이메일"
            value={email}
            name="email"
            onChange={handleEmailChange}
          />

          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            name="password"
            onChange={handlePasswordChange}
          />

          <LoginButton type="submit">
            로그인
          </LoginButton>
        </LoginForm>

        <ButtonContainer>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
          <Button>비밀번호 찾기</Button>
        </ButtonContainer>
      </DIV>
    </React.Fragment>
  );
};

export default Login;

const DIV = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 70px 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #212124;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 500px;
  height: 40px;
  border: none;
  border-radius: 4px;
  margin: 12px;
  font-size: 15px;
  font-weight: bold;
  background-color: #ff6f0f;
  color: #ffffff;

  &:hover {
    background-color: #ff8700;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 400px;
  height: 45px;
  border: none;
  background-color: #ffffff;
  font-size: 13px;
  opacity: 0.8;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;