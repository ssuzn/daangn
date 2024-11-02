import React from "react";
import styled from "styled-components";

import Spinner from '../assets/spinner.gif';

export const Loading = () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려주세요.</LoadingText>
      <img src={Spinner} alt="로딩중" />
    </Background>
  );
};

export default Loading;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
    font-weight: bold;
`;
