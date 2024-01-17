import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MyHome } from './pages/home';
import { MainLayout } from './layouts/mylayouts';

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
        </Routes>
      </BrowserRouter>
      </MainLayout>
  );
}

export default App
