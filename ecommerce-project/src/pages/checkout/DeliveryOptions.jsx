import { formatMoney } from "../../utils/money";
import axios from "axios";
import dayjs from "dayjs";

export function DeliveryOptions({deliveryOptions, cartItem, loadCart}){
  return (
                  <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
                {deliveryOptions.map((deliveryOption) => {
                  let priceString = 'Free Shipping';

                  if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} -Shipping`
                  }

                  const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`,{
                      deliveryOptionId: deliveryOption.id
                    });
                    await loadCart();
                  };

                  return (

                    <div key={deliveryOption.id} className="delivery-option">
                      <input type="radio"
                        defaultChecked={deliveryOption.id === cartItem.deliveryOptionId}
                        className="delivery-option-input"
                        name={`delivery-option-${cartItem.productId}`} 
                        onClick={updateDeliveryOption}/>
                      <div>
                        <div className="delivery-option-date">
                          {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">
                          {priceString}
                        </div>
                      </div>
                    </div>


                  );
                })}

              </div>
  );
}