import React, { useState } from 'react';
import styled from 'styled-components';

import { emailDuplicateCheck } from '../utils/emailUtils';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [username, setUsername] = useState("");

    // 에러 메시지 관리
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPwdError, setConfirmPwdError] = useState("");

    // email 중복 검사 여부
    const [isEmailCheck, setIsEmailCheck] = useState(false);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        handleEmailCheck(email);
    }

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === "password") {
            setPassword(value);
            handlePasswordCheck(value, confirmPwd);
        } else {
            setConfirmPwd(value);
            handlePasswordCheck(password, value);
        }
    }

    const handleUsernameChange = (e) => {
      const username = e.target.value;
      setUsername(username);
    }

    const handleEmailCheck = async (email) => {
        if (email === "") {
            setEmailError("이메일을 입력해주세요.");
            setIsEmailCheck(false);
            return false;
        } else if (!/^[\w-.]+@[A-Za-z\d-]+\.[A-Za-z]{2,}$/.test(email)) {
            setEmailError("유효한 이메일 형식이 아닙니다.");
            setIsEmailCheck(false);
            return false;
        }
        try {
            const responseData = await emailDuplicateCheck(email);
            if (responseData) {
                setEmailError("사용 가능한 이메일입니다.");
                setIsEmailCheck(true);
                return true;
            } else {
                setEmailError("이미 사용중인 이메일입니다.");
                setIsEmailCheck(false);
                return false;
            }
        } catch (err) {
            alert("서버 에러: 관리자에게 문의하세요.");
            console.error(err);
            return false;
        }
    }

    const handlePasswordCheck = (password, confirmPwd) => {
        const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError("8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.");
            return false;
        } else if (confirmPwd !== password) {
            setPasswordError("");
            setConfirmPwdError("비밀번호가 일치하지 않습니다.");
            return false;
        } else {
            setPasswordError("");
            setConfirmPwdError("");
            return true;
        }
    }

    const signup = async (email, password, username) => {
        const storedEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];

        storedEmails.push(email);
        localStorage.setItem("registeredEmails", JSON.stringify(storedEmails));

        const userData = { email, password, username };
        localStorage.setItem("userData", JSON.stringify(userData));

        return true;
    };


    const signupProcess = async (e) => {
        e.preventDefault();

        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
    
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
    
        if (!confirmPwd) {
            alert("비밀번호 확인을 입력해주세요.");
            return;
        }

        if (!username) {
          alert("이름을 입력해주세요.");
            return;
        }
        
        const emailCheckResult = await handleEmailCheck(email);
        if (emailCheckResult) setEmailError("");
        else return;
        if (!isEmailCheck) {
            alert("이메일 중복 체크를 해주세요.");
            return;
        }

        const passwordCheckResult = handlePasswordCheck(password, confirmPwd);
        if (passwordCheckResult) { setPasswordError(""); setConfirmPwdError(""); }
        else return;

        try {
            const responseData = await signup(email, password, username);
            if (responseData) {
                localStorage.setItem("loginEmail", email);
                alert("회원가입이 완료되었습니다.");
                window.location.reload(); 
            } else {
                alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
            }
        } catch (err) {
            alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
            console.error(err);
        }
    }
    
    
  return (
    <React.Fragment>
      <DIV>
        <Title>🥕 회원가입을 해주세요.</Title>
        <SignupForm onSubmit={signupProcess}>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            value={email}
            name="email"
            onChange={handleEmailChange}
          />
          {emailError && <Error isEmailCheck={isEmailCheck}>{emailError}</Error>}

          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            name="password"
            onChange={handlePasswordChange}
          />
          {passwordError && <Error>{passwordError}</Error>}

          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={confirmPwd}
            name="confirmPwd"
            onChange={handlePasswordChange}
          />
          {confirmPwdError && <Error>{confirmPwdError}</Error>}

          <Input 
            type="text"
            placeholder="이름을 입력해주세요."
            value={username}
            name='username'
            onChange={handleUsernameChange}
          />

          <SignupButton type="submit">
            회원가입
          </SignupButton>
        </SignupForm>

      </DIV>
    </React.Fragment>
  );
};

export default SignUp;


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

const SignupForm = styled.form`
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

const Error = styled.p`
  color: ${(props) => (props.isEmailCheck ? "black" : "red")};
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 13px;
`;

const SignupButton = styled.button`
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