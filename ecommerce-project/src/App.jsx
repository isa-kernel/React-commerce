import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout'
import { OrdersPage } from './pages/orders'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="Orders" element={<OrdersPage />} />
      <Route path="Tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
