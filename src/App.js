import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
