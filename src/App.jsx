import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Pages/Home/Home';

export const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};
