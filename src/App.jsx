import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Pages/Home/Home';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};
