import React from "react";
import banner1 from "../../assets/images/banner1.png";
import styled from "styled-components";

function Banner1() {
  const handleGoogle = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.towneers.www";
  };
  const handleApple = () => {
    window.location.href =
      "https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995";
  };

  return (
    <React.Fragment>
      <DIV>
        <div>
          <H1>
            당신 근처의
            <br />
            지역 생활 커뮤니티
          </H1>
          <P>
            동네라서 가능한 모든 것
            <br />
            당근에서 가까운 이웃과 함께해요.
          </P>

          <ButtonBox>
            <BUTTON onClick={handleGoogle}>Google Play</BUTTON>
            <BUTTON onClick={handleApple}>App Store</BUTTON>
          </ButtonBox>
        </div>

        <Image src={banner1} alt="Banner1" />
      </DIV>
    </React.Fragment>
  );
}

export default Banner1;

const DIV = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fffae0;
`;
const H1 = styled.h1`
  font-size: 54px;
  line-height: 73px;
  font-weight: 700;
  padding-top: 200px;
`;

const P = styled.p`
  font-size: 20px;
  color: #7c7c7c;
  line-height: 30px;
  font-weight: 400;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 373px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
`;
const BUTTON = styled.button`
  width: 180px;
  height: 56px;
  background-color: #ff6f0f;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #ff8700;
  }
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

  @media (max-width: 600px) {
    height: 0;
  }
`;
