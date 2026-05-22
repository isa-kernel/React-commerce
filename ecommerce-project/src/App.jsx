import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/checkoutPage'
import { OrdersPage } from './pages/orders/orders'
import { TrackingPage } from './pages/tracking/TrackingPage'
import './App.css'
// import axios from 'axios'
import API from './api/api'



function App() {
    const [cart, setCart] = useState([]);

const loadCart = async () => {
  try {
    const response = await API.get('/cart-items?expand=product');
    setCart(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  loadCart();
}, []);

  const [products, setProducts] = useState([]);


  useEffect( () => {
    const getHomeData = async () => {
    const response = await  API.get('/products');
      setProducts(response.data);
    };

    getHomeData();

  },[]);



  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} products={products} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="Orders" element={<OrdersPage cart={cart}  loadCart={loadCart} />} />
      <Route path="Tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  )
}

export default App
