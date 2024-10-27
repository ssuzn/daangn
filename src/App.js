import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <PageContent>
        <Routes>
          <Route path='/' element={<Main />} />
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
