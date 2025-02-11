import React, { useEffect, useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Outlet } from 'react-router-dom';
import Loading from './Components/Loading';

export const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? <span><Loading/></span> :
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
      }
    </div>
  );
};
