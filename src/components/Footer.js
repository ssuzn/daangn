import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <React.Fragment>

      <DIV>
        <Container>
          <NAV>
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
                <StyledLink onClick={() => navigate("/jobs")}>
                  당근알바
                </StyledLink>
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
            <Ul>
              <Li>
                <StyledLink onClick={() => navigate("/")}>
                  당근비즈니스
                </StyledLink>
              </Li>
              <Li>
                <StyledLink onClick={() => navigate("/onboarding")}>
                  채팅하기
                </StyledLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                <StyledLink onClick={() => navigate("/fags")}>
                  자주 묻는 질문
                </StyledLink>
              </Li>
              <Li>
                <StyledLink onClick={() => navigate("/")}>회사 소개</StyledLink>
              </Li>
              <Li>
                <StyledLink onClick={() => navigate("/")}>인재 채용</StyledLink>
              </Li>
            </Ul>
          </NAV>

          <Download>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#212124",
                paddingLeft: "10px",
              }}
            >
              당근 앱 다운로드
            </p>
            <ButtonContainer>
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.towneers.www")
                }
              >
                <FaGooglePlay style={{ fontSize: "14px", marginRight: "8px" }} />
                Google play
              </Button>
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995")
                }
              >
                <FaApple />
                App Store
              </Button>
            </ButtonContainer>
          </Download>
        </Container>

        <Info>
          <Section>
            <Desc>
              <Title>(주) 당근마켓&emsp;</Title>
              <P>|</P>
              <Title>&emsp;대표&emsp;</Title>
              <P>김용현, 황도연&emsp;| </P>
              <Title>&emsp;사업자번호&emsp;</Title>
              <P>111-12-1234</P>
            </Desc>
            <Desc>
              <Title>직업정보제공사업 신고번호&emsp;</Title>
              <P>J123412341234</P>
            </Desc>
            <Desc>
              <Title>통신판매업 신고번호&emsp;</Title>
              <P>2024-서울-1234</P>
            </Desc>
            <Desc>
              <Title>호스팅 사업자:&emsp;</Title>
              <P>Amazon Web Service(AWS)</P>
            </Desc>
            <Desc>
              <Title>주소&emsp;</Title>
              <P>서울특별시 구로구 디지털로 300, 10층 (당근서비스)</P>
            </Desc>
            <Desc>
              <Title>전화&emsp;</Title>
              <P>070-1234-5678&emsp;|</P>
              <Title>&emsp;고객문의&emsp;</Title>
              <P>cs@daangnservice.com</P>
            </Desc>
          </Section>

          <Section>
            <Desc>
              <Title>제휴 문의&emsp;</Title>
              <Title>광고 문의&emsp;</Title>
              <Title>PR 문의&emsp;</Title>
              <Title>IR 문의</Title>
            </Desc>
          </Section>

          <Section>
            <Desc>
              <Title>이용약관&emsp;</Title>
              <Title>개인정보처리방침&emsp;</Title>
              <Title>운영정책&emsp;</Title>
              <Title>위치기반서비스 이용약관&emsp;</Title>
              <Title>이용자보호 비전과 계획&emsp;</Title>
              <Title>청소년보호정책&emsp;</Title>`
            </Desc>
          </Section>
        </Info>
      </DIV>
    </React.Fragment>
  );
}

export default Footer;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding-bottom: 1rem;
`;

const NAV = styled.div`
  display: flex;
  width: 464px;
  justify-content: space-between;
  color: #212124;
  font-size: 14px;
  padding-right: 4rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
`;

const Li = styled.li`
  padding: 10px 5px;
  cursor: pointer;
`;

const StyledLink = styled.span`
  text-decoration: none;
  line-height: 24px;
  &:hover {
    border-bottom: 1px solid #212124;
  }
`;

const Download = styled.div`
  display: flex;
  width: 304px;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  display: inline-block;
  padding: 13px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f2f3f6;
  color: #212124;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e9ecf0;
  }
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-top: 1px solid #eaebee;
  align-items: flex-start;
`;

const Section = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-size: 13px;
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  color: #868b94;
  margin-bottom: -25px;
`;

const Title = styled.p`
  display: inline-block;
  font-weight: bold;
`;

const P = styled.p`
  display: inline-block;
  opacity: 0.8;
`;
