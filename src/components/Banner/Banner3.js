import React from "react";
import banner3 from "../../assets/images/banner3.png";
import styled from "styled-components";
import svg1 from "../../assets/svg/svg1.svg";
import svg2 from "../../assets/svg/svg2.svg";
import svg3 from "../../assets/svg/svg3.svg";

function Banner3() {
  return (
    <React.Fragment>
      <DIV>
        <div>
          <TITLE>동네생활</TITLE>
          <H1>
            이웃만 아는
            <br />
            동네 정보와 이야기
          </H1>
          <P>
            우리동네의 다양한 정보와 이야기를
            <br />
            공감과 댓글로 나누어요.
          </P>

          <Ul>
            <Li>
              <img src={svg1} alt="svg1" />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#212529",
                }}
              >
                동네모임
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#7C7C7C",
                  lineHeight: "17px",
                }}
              >
                근처 이웃들과 동네
                <br />
                이야기를 해보세요.
              </p>
            </Li>
            <Li>
              <img src={svg2} alt="svg2" />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#212529",
                  lineHeight: "21px",
                }}
              >
                동네질문
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#7C7C7C",
                  lineHeight: "17px",
                }}
              >
                궁금한 게 있을 땐
                <br />
                이웃에게 물어보세요.
              </p>
            </Li>
            <Li>
              <img src={svg3} alt="svg3" />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#212529",
                  lineHeight: "21px",
                }}
              >
                동네분실센터
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#7C7C7C",
                  lineHeight: "17px",
                }}
              >
                무언가를 잃어버렸다면
                <br />
                글을 올려보세요.
              </p>
            </Li>
          </Ul>
        </div>

        <Image src={banner3} alt="Banner3" />
      </DIV>
    </React.Fragment>
  );
}

export default Banner3;

const DIV = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff8f1;
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

const Ul = styled.ul`
  display: flex;
  width: 392px;
  height: 214px;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 30px;
  padding: 0px;
`;

const Li = styled.li`
  width: 134px;
  height: 184px;
  padding: 16px 10px 16px 0;
`;

const Image = styled.div`
  max-width: 100%;
  width: 557px;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 820px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    height: 400px;
  }
  @media (max-width: 650px) {
    height: 300px;
  }
  @media (max-width: 570px) {
    height: 0;
  }
`;
