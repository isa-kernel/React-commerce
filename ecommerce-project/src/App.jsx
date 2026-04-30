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

    useEffect(() => {
      axios.get('/api/cart-items?expand=product')
        .then((response) => {
          setCart(response.data);
        });
    },[]);



  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="Orders" element={<OrdersPage cart={cart} />} />
      <Route path="Tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
