import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // 통신 중 & 메시지 출력 중에는 버튼 클릭 불가 -> disabled(loading)
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo, // 이전 userInfo 객체 복사
      [name]: value, // name에 해당하는 속성만 업데이트
    }));
  };

  const loginProcess = (e) => {
    e.preventDefault();
    if (!userInfo.email) {
      return alert("Email을 입력하세요.");
    }
    else if (!userInfo.password) {
      return alert("Password를 입력하세요.");
    } else {
      let body = {
        email: userInfo.email,
        password: userInfo.password,
      };
    }
    setLoading(true);
  };

  return (
    <React.Fragment>
      <DIV>
        <Title>🥕 로그인을 해주세요.</Title>
        <LoginForm onSubmit={loginProcess}>
          <Input
            type="text"
            placeholder="이메일"
            value={userInfo.email}
            name="email"
            onChange={handleInfoChange}
          />
          <Input
            type="text"
            placeholder="비밀번호"
            value={userInfo.password}
            name="password"
            onChange={handleInfoChange}
          />

          <LoginButton type="submit" disabled={loading}>
            로그인
          </LoginButton>
        </LoginForm>

        <ButtonContainer>
          <Button onClick={handleSignup}>회원가입</Button>
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
