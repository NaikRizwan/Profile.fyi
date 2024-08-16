import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
//import { useLaterCartContext } from "../context/Latercartcontext";
import { useNavigate } from "react-router-dom";
const LaterCartItem = ({ id, name, image, color, price, amount }) => {
  // const { removeItem, setDecrease, setIncrement } =
  //   useLaterCartContext();
  const { setDecreaselater, setIncrementlater, removeItemlater, moveToCart } =
    useCartContext();
  const Navigate = useNavigate();
  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <div className="cart_heading grid grid-six-column">
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
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecreaselater(id)}
        setIncrease={() => setIncrementlater(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItemlater(id)} />
      </div>
      <div>
        <button onClick={() => moveToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default LaterCartItem;
