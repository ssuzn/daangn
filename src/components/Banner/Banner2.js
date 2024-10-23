import React from "react";
import banner2 from "../../assets/images/banner2.png";
import styled from "styled-components";

function Banner2() {
  const handleHot = () => {
    window.location.href = "/hot_articles";
  };
  const handleTrust = () => {
    window.location.href = "/trust";
  };

  return (
    <React.Fragment>
      <DIV>
        <Image src={banner2} alt="Banner2" />

        <div>
          <TITLE>중고거래</TITLE>
          <H1>
            믿을만한
            <br />
            이웃 간 중고거래
          </H1>
          <P>
            동네 주민들과 가깝고 따뜻한 거래를
            <br />
            지금 경험해보세요.
          </P>

          <ButtonBox>
            <BUTTON onClick={handleHot}>인기매물 보기</BUTTON>
            <BUTTON onClick={handleTrust}>믿을 수 있는 중고거래</BUTTON>
          </ButtonBox>
        </div>
      </DIV>
    </React.Fragment>
  );
}

export default Banner2;

const DIV = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f9f9;
`;

const TITLE = styled.p`
  font-size: 18px;
  color: #ff6f0f;
  font-weight: 700;
`;

const H1 = styled.h1`
  font-size: 54px;
  line-height: 73px;
  font-weight: 700;
`;

const P = styled.p`
  font-size: 20px;
  color: #7c7c7c;
  line-height: 30px;
  font-weight: 400;
`;

const Image = styled.div`
  max-width: 100%;
  width: 557px;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 650px) {
    height: 400px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 32px;
  justify-content: space-between;
`;

const BUTTON = styled.button`
  display: inline-block;
  background-color: #e9ecef;
  color: #212529;
  padding: 12px 2rem;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;
