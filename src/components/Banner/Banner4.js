import React from 'react';
import banner4 from '../../assets/images/banner4.png';
import styled from 'styled-components';

function Banner4() {
    const handleNeighbor = () => {
        window.location.href = "";
    };

  return (
    <React.Fragment>
      <DIV>

        <div>
            <TITLE>동네업체</TITLE>
            <H1>
                내 근처에서 찾는
                <br />
                동네업체
            </H1>
            <P>
                이웃들의 추천 후기를 확인하고
                <br />
                동네 곳곳의 업체들을 찾을 수 있어요.
            </P>

            <ButtonBox>
                    <BUTTON onClick={handleNeighbor}>
                        당근 동네업체 보기
                    </BUTTON>
            </ButtonBox>

        </div>

        <Image src={banner4} alt="Banner4" />
      </DIV>
    </React.Fragment>
  )
}

export default Banner4;

const DIV = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F6FDEC;
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

const ButtonBox = styled.div`
    margin-top: 32px;
    justify-content: space-between;
`

const BUTTON = styled.button`
    display: inline-block;
    background-color: #E9ECEF;
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
`

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

  @media (max-width: 480px) {
    height: 400px;
  }
`;
