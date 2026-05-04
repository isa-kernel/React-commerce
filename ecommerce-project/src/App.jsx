import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/checkoutPage'
import { OrdersPage } from './pages/orders/orders'
import { TrackingPage } from './pages/tracking/TrackingPage'
import './App.css'
import axios from 'axios'



function App() {
    const [cart, setCart] = useState([]);

const loadCart = async () => {
  try {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  loadCart();
}, []);



  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="Orders" element={<OrdersPage cart={cart} />} />
      <Route path="Tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  )
}

export default App
