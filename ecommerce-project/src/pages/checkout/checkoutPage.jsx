// import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { PaymentSummary } from './PaymentSummary';
import './checkout-header.css'
import './CheckoutPage.css'
import { OrderSummary } from './OrderSummary';
import API from '../../api/api';

export function CheckoutPage({ cart ,loadCart }) {
  const [ deliveryOptions, setDeliveryOptions ] = useState([]);
  const [ paymentSummary, setPaymentSummary ] = useState(null);

  useEffect(() => {

    const fetchCheckoutPageData = async () => {
     let response = await API.get('/api/delivery-options?expand=estimatedDeliveryTime');
        setDeliveryOptions(response.data);
    };

    fetchCheckoutPageData();    
    }, []);

    useEffect(() => {

      const fetchCheckoutPaymentPageData = async () => {
      let response = await API.get('/api/payment-summary');
        setPaymentSummary(response.data);
    };

    fetchCheckoutPaymentPageData();
    }, [cart]);
  // console.log(paymentSummary)


  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{cart.length} {cart.length === 1 ? 'product' : 'products'}</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

              <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );

}