import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/userSlice";
import SearchBar from "./SearchBar";

import logo from "../assets/images/logo.png";
import { HiMiniBars3 } from "react-icons/hi2";

function Header({ setIsLoading }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const username = useSelector((state) => state.user.username);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu opened");
  };

  const logoutProcess = () => {
    setIsLoading(true); // 로딩 시작

    setTimeout(() => {
      dispatch(logout());
      localStorage.removeItem("loginEmail");
      setIsLoading(false); // 로딩 종료
      navigate("/");
    }, 1000);
  };

  return (
    <React.Fragment>
      <DIV>
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{
            width: "65px",
            height: "38px",
            cursor: "pointer",
            padding: "0 20px",
          }}
        />

        <NAV isMenuOpen={isMenuOpen}>
          <Ul>
            <Li>
              <StyledLink onClick={() => navigate("/fleamarket")}>
                중고거래
              </StyledLink>
            </Li>
            <Li>
              <StyledLink onClick={() => navigate("/nearby_stores")}>
                동네업체
              </StyledLink>
            </Li>
            <Li>
              <StyledLink onClick={() => navigate("/jobs")}>알바</StyledLink>
            </Li>
            <Li>
              <StyledLink onClick={() => navigate("/reality")}>
                부동산
              </StyledLink>
            </Li>
            <Li>
              <StyledLink onClick={() => navigate("/cars")}>
                중고차 직거래
              </StyledLink>
            </Li>
          </Ul>
        </NAV>

        <Side>
          <SearchBar />

          <HamburgerIcon onClick={handleMenuOpen} />

          <Chat>
            <ChatButton>채팅하기</ChatButton>
          </Chat>
        </Side>

        {isLoggedIn ? (
          <User>
            <UserButton onClick={() => navigate("/mypage")}>
              {username} 님
            </UserButton>

              <UserButton 
                onClick={logoutProcess}
                >로그아웃</UserButton>
          </User>
        ) : (
          <User>
            <UserButton onClick={() => navigate("/login")}>로그인</UserButton>
            <UserButton onClick={() => navigate("/signup")}>
              회원가입
            </UserButton>
          </User>
        )}

        {isMenuOpen && (
          <DropdownMenu isMenuOpen={isMenuOpen}>
            <MenuItem
              onClick={() => {
                navigate("/fleamarket");
                setIsMenuOpen(false);
              }}
            >
              중고거래
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/nearby_stores");
                setIsMenuOpen(false);
              }}
            >
              동네업체
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/jobs");
                setIsMenuOpen(false);
              }}
            >
              알바
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/reality");
                setIsMenuOpen(false);
              }}
            >
              부동산
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/cars");
                setIsMenuOpen(false);
              }}
            >
              중고차 직거래
            </MenuItem>

            {!isLoggedIn ? (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  로그인
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/signup");
                    setIsMenuOpen(false);
                  }}
                >
                  회원가입
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/mypage");
                    setIsMenuOpen(false);
                  }}
                >
                  마이페이지
                </MenuItem>
              </>
            )}
          </DropdownMenu>
        )}
      </DIV>
    </React.Fragment>
  );
}

export default Header;

const DIV = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 999;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: 915px) {
    justify-content: space-between;
  }
`;

const NAV = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;

  @media (max-width: 915px) {
    display: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  margin-right: 20px;
  cursor: pointer;
`;

const StyledLink = styled.span`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #4d5159;
  line-height: 24px;
`;

const Side = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.3;
  margin-right: 30px;
`;

const HamburgerIcon = styled(HiMiniBars3)`
  font-size: 24px;
  color: #212124;
  cursor: pointer;

  display: none;

  @media (max-width: 915px) {
    display: block;
  }
`;

const Chat = styled.div`
  margin-right: 12px;

  display: ${(props) => (props.show ? "block" : "none")};
  @media (min-width: 915px) {
    display: block;
  }
`;

const ChatButton = styled.button`
  color: #212124;
  background-color: #ffffff;
  border: 1px solid #d1d3d8;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 17px 10px 17px;
  cursor: pointer;
`;

const User = styled.div`
  align-items: center;
  justify-content: space-between;

  @media (max-width: 915px) {
    display: none;
  }
`;

const UserButton = styled.button`
  color: #212124;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 17px 10px 17px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 64px;
  width: 100%;
  font-size: 1rem;

  @media (min-width: 915px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  color: #212124;
  padding: 1.6rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;

  cursor: pointer;
  &:hover {
    background-color: #f2f3f6;
  }
`;
