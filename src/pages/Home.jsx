import React from 'react';
import Login from '@pages/Login';
import Header from '@components/Header'
import ProductList from '@containers/ProductList';

const Home = () => {
  return (
    <>
    <Header/>
    
    <ProductList/>
    
    </>
  );
}

export default Home;