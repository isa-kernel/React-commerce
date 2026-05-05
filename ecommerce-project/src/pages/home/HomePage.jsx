// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductGrid } from './productsGrid';

export function HomePage({ cart, loadCart, products }) {

  

  return (
    <>
      <title>Eccomerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
      <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}