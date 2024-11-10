import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Loading from './components/Loading';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  // 현재 위치 (경로) 추적하는 훅: 경로 변경될 때마다 새로운 위치 값 감지
  const location = useLocation(); 
  
  useEffect(() => {
    setIsLoading(true); // 경로 변경마다 로딩 활성화
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1초 후 종료

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <React.Fragment>
      {isLoading ? <Loading /> : null}
      <Header setIsLoading={setIsLoading} />
      <PageContent>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fleamarket' element={<PostList />} />
          <Route path='/fleamarket/:id' element={<PostDetail />} />
        </Routes>
      </PageContent>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

const PageContent = styled.div`
  padding-top: 64px;
`;
