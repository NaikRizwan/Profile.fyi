import React from "react";
import { Wrapper } from "./Cart";
import { Button } from "../styles/Button";
import Buycash1 from "./Buycash1";
import Checkout1 from "./Checkout1";
import FormatPrice from "../Helpers/FormatPrice";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const BuyNow = () => {
  const location = useLocation();

  // Extract data from the location state
  const { singleProduct, color } = location.state || {};
  console.log(singleProduct);
  // Destructure data from singleProduct
  const { id, name, company, price, description, stock, stars, reviews } =
    singleProduct || {};
  const image = singleProduct.image[0].url;
  const shipping_fee = 0;
  const image1 = image[0].url;
  const [amount, setAmount] = useState(1);
  const total_price = amount * price;
  const cart = [
    {
      id: id,
      name: name,
      color: color,
      amount: amount,
      image: image,
      price: price,
    },
  ];
  const setIncrease = () => {
    if (amount < stock) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  const setDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State to manage selected payment method
  const [showPaymentComponents, setShowPaymentComponents] = useState(false); // State to manage visibility of payment components
  const [error, setError] = useState(false); // State to manage error message

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setError(false);
  };

  const handleProceedToBuy = () => {
    if (selectedPaymentMethod !== "") {
      setShowPaymentComponents(true);
    } else {
      setError(true);
      // Handle case when user hasn't selected any payment method
      // You can display an error message or handle it as needed
    }
  };
  return (
    <Wrapper style={{ padding: "9rem 0" }}>
      <div className="container">
        <div className="cart_heading grid grid-four-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
        </div>
        <hr />
        {/* <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div> */}
        <div className="cart-item">
          <div className="cart_heading grid grid-four-column">
            <div className="cart-image--name">
              <div>
                <figure>
                  <img src={image} alt={id} />
                </figure>
              </div>
              <div>
                <p>{name}</p>
                <div className="color-div">
                  <p>color:</p>
                  <div
                    className="color-style"
                    style={{ backgroundColor: color, color: color }}
                  ></div>
                </div>
              </div>
            </div>
            {/* price   */}
            <div className="cart-hide">
              <p>
                <FormatPrice price={price} />
              </p>
            </div>

            {/* Quantity  */}
            <div className="cart-button">
              <div className="amount-toggle">
                <button onClick={() => setDecrease()}>
                  <FaMinus />
                </button>
                <div className="amount-style">{amount}</div>
                <button onClick={() => setIncrease()}>
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* //Subtotal */}
            <div className="cart-hide">
              <p>
                <FormatPrice price={price * amount} />
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* <div className="cart-two-button">
          <NavLink to="/">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </Button>
        </div> */}
        <div className="container">
          <div className="grid grid-two-column">
            <div className="  order-total--amount">
              <div className="order-total--subdata">
                <div>
                  <p>subtotal:</p>
                  <p>
                    <FormatPrice price={total_price} />
                  </p>
                </div>
                <div>
                  <p>shipping fee:</p>
                  <p>
                    <FormatPrice price={shipping_fee} />
                  </p>
                </div>
                <hr />
                <div>
                  <p>order total:</p>
                  <p>
                    <FormatPrice price={shipping_fee + total_price} />
                  </p>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    onChange={handlePaymentMethodChange}
                    className={
                      error && selectedPaymentMethod === "" ? "error" : ""
                    }
                  />
                  <label
                    className={
                      error && selectedPaymentMethod === "" ? "error" : ""
                    }
                  >
                    By Cash
                  </label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    onChange={handlePaymentMethodChange}
                    className={
                      error && selectedPaymentMethod === "" ? "error" : ""
                    }
                  />
                  <label
                    className={
                      error && selectedPaymentMethod === "" ? "error" : ""
                    }
                  >
                    By Online
                  </label>
                </div>
                {error && selectedPaymentMethod === "" && (
                  <p className="error-message">choose a payment method.</p>
                )}
                <Button onClick={handleProceedToBuy}>Proceed To Buy</Button>
              </div>
            </div>
            <div className="payementmethod">
              {showPaymentComponents && (
                <div className="paymentComponents">
                  {selectedPaymentMethod === "cash" && <Buycash1 cart={cart} />}
                  {selectedPaymentMethod === "online" && (
                    <Checkout1
                      cart={cart}
                      total_price={total_price}
                      shipping_fee={shipping_fee}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BuyNow;
