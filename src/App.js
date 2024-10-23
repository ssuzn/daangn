import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
