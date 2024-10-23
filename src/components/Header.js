import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { GoSearch } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";

function Header() {
  const [showInput, setShowInput] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSearchIcon = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <React.Fragment>
      <DIV>
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ width: "65px", height: "38px", cursor: "pointer" }}
        />

        <NAV show={showInput}>
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
          <Search>
            <SearchIcon show={showInput} onClick={toggleSearchIcon} />
            <Input
              type="text"
              placeholder="물품이나 동네를 검색해보세요"
              show={showInput}
            ></Input>
          </Search>

          <HamburgerIcon show={showInput} onClick={toggleMenu} />

          <Chat>
            <ChatButton show={showInput} isMenuOpen={isMenuOpen}>
              채팅하기
            </ChatButton>
          </Chat>
        </Side>

        <User show={showInput}>
          <UserButton onClick={() => navigate("/login")}>로그인</UserButton>
          <UserButton onClick={() => navigate("/signup")}>회원가입</UserButton>
        </User>

        <DropdownMenu className={isMenuOpen ? "open" : ""}>
          <MenuItem onClick={() => navigate("/fleamarket")}>중고거래</MenuItem>
          <MenuItem onClick={() => navigate("/nearby_stores")}>
            동네업체
          </MenuItem>
          <MenuItem onClick={() => navigate("/jobs")}>알바</MenuItem>
          <MenuItem onClick={() => navigate("/reality")}>부동산</MenuItem>
          <MenuItem onClick={() => navigate("/cars")}>중고차 직거래</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>로그인</MenuItem>
          <MenuItem>회원가입</MenuItem>
        </DropdownMenu>
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
  padding: 0 20px;
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

  display: ${(props) => (props.show ? "block" : "none")};

  @media (min-width: 915px) {
    display: block;
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
  color: #212529;
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

const Search = styled.div`
  margin-right: 12px;
  color: #868b94;
`;

const SearchIcon = styled(GoSearch)`
  font-size: 24px;
  color: #212124;
  cursor: pointer;
  display: ${(props) => (props.show ? "none" : "block")};

  @media (min-width: 943px) {
    display: none;
  }
`;

const HamburgerIcon = styled(HiMiniBars3)`
  font-size: 24px;
  color: #212124;
  cursor: pointer;

  display: ${(props) => (props.show ? "none" : "block")};

  @media (min-width: 915px) {
    display: none;
  }
`;

const Input = styled.input`
  background-color: #f2f3f6;
  width: 288px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }

  display: ${(props) => (props.show ? "block" : "none")};

  @media (min-width: 943px) {
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
  display: ${(props) => (props.show ? "block" : "none")};

  @media (min-width: 915px) {
    display: block;
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
`;

const DropdownMenu = styled.div`
  flex-direction: column;
  position: absolute;
  z-index: 998;
  width: 100%;
  top: 64px;
  transition: 0.5s ease;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
`;

const MenuItem = styled.div``;
