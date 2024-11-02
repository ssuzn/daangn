import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      {isLoading ? <Loading /> : null}
      <Header setIsLoading={setIsLoading} />
      <PageContent>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
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
