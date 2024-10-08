// import styled from "styled-components";
// import { useCartContext } from "../context/cart_context";
// import CartItem from "../components/CartItem";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "../styles/Button";
// import FormatPrice from "../Helpers/FormatPrice";
// import { useEffect } from "react";
// //  import { useAuth0 } from "@auth0/auth0-react";

// //  import Payement from "./Payement";
// import Checkout from "./Checkout";
// import { useState } from "react";

// import { useUser } from "../context/UserContext";
// const Cart = () => {
//   const { cart } = useCartContext();

//   const { state, dispatch } = useUser();

//   const callAbout = async () => {
//     try {
//       // ... your existing code to fetch user data

//       const response = await fetch("/about", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();
//       if (response.status === 400 || !data) {
//         dispatch({ type: "CLEAR_USER" });
//         navigate("/login");
//       } else {
//         dispatch({
//           type: "SET_USER",
//           payload: { name: data.full_name, email: data.email },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "CLEAR_USER" });
//       navigate("/login");
//       // Handle errors
//     }
//   };
//   // useEffect(() => {
//   //   if (state.loggedIn) {
//   //     callAbout();
//   //   }
//   // }, [state.loggedIn]);
//   useEffect(() => {
//     callAbout();
//   }, [state.loggedIn]);
//   console.log("cart", cart);
//   // const { isAuthenticated } = useAuth();
//   const [showPaymentContent, setShowPaymentContent] = useState(false);
//   const [isButtonVisible, setIsButtonVisible] = useState(true);
//   // const history = useHistory();
//   const navigate = useNavigate();

//   const rifat = () => {
//     if (state.loggedIn) {
//       // show pyemnt page above the data
//       // navigate('/payement');
//       setShowPaymentContent(true);
//       setIsButtonVisible(false);
//       // history.push("/payement")
//     } else {
//       navigate("/login");
//       // history.push("/login")
//     }
//   };
//   const { clearCart, total_price, amount, shipping_fee } = useCartContext();
//   console.log(
//     "🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart",
//     cart,
//     amount,
//     total_price
//   );

//   //  const { isAuthenticated, user } = useAuth0();

//   if (cart.length === 0) {
//     return (
//       <EmptyDiv>
//         <h3>No Cart in Item </h3>
//       </EmptyDiv>
//     );
//   }

//   return (
//     <Wrapper style={{ padding: "9rem 0" }}>
//       <div className="container">
//         <div className="cart_heading grid grid-five-column">
//           <p>Item</p>
//           <p className="cart-hide">Price</p>
//           <p>Quantity</p>
//           <p className="cart-hide">Subtotal</p>
//           <p>Remove</p>
//         </div>
//         <hr />
//         <div className="cart-item">
//           {cart.map((curElem) => {
//             return <CartItem key={curElem.id} {...curElem} />;
//           })}
//         </div>
//         <hr />
//         <div className="cart-two-button">
//           <NavLink to="/products">
//             <Button> continue Shopping </Button>
//           </NavLink>
//           <Button className="btn btn-clear" onClick={clearCart}>
//             clear cart
//           </Button>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <div className="container">
//           <div className="grid grid-two-column">
//             <div className="  order-total--amount">
//               <div className="order-total--subdata">
//                 <div>
//                   <p>subtotal:</p>
//                   <p>
//                     <FormatPrice price={total_price} />
//                   </p>
//                 </div>
//                 <div>
//                   <p>shipping fee:</p>
//                   <p>
//                     <FormatPrice price={shipping_fee} />
//                   </p>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>order total:</p>
//                   <p>
//                     <FormatPrice price={shipping_fee + total_price} />
//                   </p>
//                 </div>
//                 {isButtonVisible && (
//                   <Button onClick={rifat}>Proceed To Buy</Button>
//                 )}
//               </div>
//             </div>
//             <div>{showPaymentContent ? <Checkout /> : null}</div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const EmptyDiv = styled.div`
//   display: grid;
//   place-items: center;
//   height: 50vh;

//   h3 {
//     font-size: 4.2rem;
//     text-transform: capitalize;
//     font-weight: 300;
//   }
// `;

// export const Wrapper = styled.section`
//   // padding: 9rem 0;

//   .grid-four-column {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   .grid-five-column {
//     grid-template-columns: repeat(5, 1fr);
//     text-align: center;
//     align-items: center;

//     margin-left: 5%;
//     margin-right: 5%;
//   }
//   .cart-heading {
//     text-align: center;
//     text-transform: uppercase;
//   }
//   hr {
//     margin-top: 1rem;
//   }
//   .cart-item {
//     padding: 3.2rem 0;
//     display: flex;
//     flex-direction: column;
//     gap: 3.2rem;
//   }

//   .cart-user--profile {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 1.2rem;
//     margin-bottom: 5.4rem;

//     img {
//       width: 8rem;
//       height: 8rem;
//       border-radius: 50%;
//     }
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .cart-user--name {
//     text-transform: capitalize;
//   }
//   .cart-image--name {
//     /* background-color: red; */
//     align-items: center;
//     display: grid;
//     gap: 1rem;
//     grid-template-columns: 0.4fr 1fr;
//     text-transform: capitalize;
//     text-align: left;
//     img {
//       max-width: 5rem;
//       height: 5rem;
//       object-fit: contain;
//       color: transparent;
//     }

//     .color-div {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       gap: 1rem;

//       .color-style {
//         width: 1.4rem;
//         height: 1.4rem;

//         border-radius: 50%;
//       }
//     }
//   }

//   .cart-two-button {
//     margin-top: 2rem;
//     display: flex;
//     justify-content: space-between;

//     .btn-clear {
//       background-color: #e74c3c;
//     }
//   }

//   .amount-toggle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2.4rem;
//     font-size: 1.4rem;

//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }

//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }

//   .remove_icon {
//     font-size: 1.6rem;
//     color: #e74c3c;
//     cursor: pointer;
//   }

//   .order-total--amount {
//     width: 100%;
//     border-radius: 20px;
//     text-transform: capitalize;
//     margin-top: 5%;
//     background-color: lightcoral;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: flex-end;

//     .order-total--subdata {
//       border: 0.1rem solid #f0f0f0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.8rem;
//       padding: 3.2rem;
//     }
//     div {
//       display: flex;
//       gap: 3.2rem;
//       justify-content: space-between;
//     }

//     div:last-child {
//       background-color: #fafafa;
//       border-top-left-radius: 20px;
//       border-top-right-radius: 20px;
//     }

//     div p:last-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.heading};
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-five-column {
//       grid-template-columns: 1.5fr 1fr 0.5fr;
//     }
//     .grid1 {
//       display: block;
//     }
//     .container {
//       padding: 0 1px;
//     }
//     .cart-hide {
//       display: none;
//     }

//     .cart-two-button {
//       margin-top: 2rem;
//       display: flex;
//       justify-content: space-between;
//       gap: 2.2rem;
//     }

//     .order-total--amount {
//       width: 100%;
//       text-transform: capitalize;
//       justify-content: flex-start;
//       align-items: flex-start;

//       .order-total--subdata {
//         width: 100%;
//         border: 0.1rem solid #f0f0f0;
//         display: flex;
//         flex-direction: column;
//         gap: 1.8rem;
//         padding: 3.2rem;
//       }
//     }
//   }
// `;

// export default Cart;

import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartItem from "../components/CartItem";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";
// import Buycash from "./Proccedtopay";
import FormatPrice from "../Helpers/FormatPrice";
import { useEffect, useState } from "react";

// import Checkout from "./Checkout";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  console.log("cart", cart);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State to manage selected payment method
  const [showPaymentComponents, setShowPaymentComponents] = useState(false); // State to manage visibility of payment components
  const [error, setError] = useState(false); // State to manage error message

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setError(false);
  };

  const handleProceedToBuy = () => {
    alert("Payement funcationlay will be added later");
    if (selectedPaymentMethod !== "") {
      setShowPaymentComponents(true);
    } else {
      setError(true);
      // Handle case when user hasn't selected any payment method
      // You can display an error message or handle it as needed
    }
  };
  const { clearCart, total_price, amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item </h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper style={{ padding: "9rem 0" }}>
      <div className="container">
        <div className="cart_heading grid grid-six-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </Button>
        </div>
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
                {/* <div className="radio-container">
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
                )} */}
                <Button onClick={handleProceedToBuy}>Proceed To Buy</Button>
              </div>
            </div>
            {/* <div className="payementmethod">
              {showPaymentComponents && (
                <div className="paymentComponents">
                  {selectedPaymentMethod === "cash" && <Buycash />}
                  {selectedPaymentMethod === "online" && <Checkout />}
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export const Wrapper = styled.section`
  // padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    align-items: center;

    margin-left: 5%;
    margin-right: 5%;
  }
  .grid-six-column {
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    align-items: center;

    margin-left: 5%;
    margin-right: 5%;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    align-items: center;

    margin-left: 5%;
    margin-right: 5%;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }
  /* styles.css */

  /* Define styles for the radio buttons */
  .radio-container {
    margin-bottom: 10px;
  }
  
  .radio-container input[type="radio"] {
    margin-right: 5px;
   
    position: relative;
    left: 22px;
   
  }
  
  /* Define styles for labels */
  .radio-container label {
    position: relative;
    font-size: 15px;
    font-weight: bold;
    font-family: monospace;
    right: 18px;
  }
  
  /* Styles for error state */
  .error {
    border: 1px solid red;
    /* Add other styles for highlighting error */
  }
  
  .error-message {
    color: red;
    /* Additional styles for error message */
  }
  
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .order-total--subdata {
      border: 4.1rem solid #f0f0f0;
    border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 4.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  // }
  // .order-total--amount {
  //   width: 100%;
  //   border-radius: 20px;
  //   text-transform: capitalize;
  //   margin-top: 5%;
  //   background-color: lightcoral;
  //   flex-direction: column;
  //   justify-content: flex-end;
  //   align-items: flex-end;

  //   .order-total--subdata {
  //     border: 0.1rem solid #f0f0f0;
  //     display: flex;
  //     flex-direction: column;
  //     gap: 1.8rem;
  //     padding: 3.2rem;
  //   }
  //   div {
  //     display: flex;
  //     gap: 3.2rem;
  //     justify-content: space-between;
  //   }

  //   div:last-child {
  //     background-color: #fafafa;
  //     border-top-left-radius: 20px;
  //     border-top-right-radius: 20px;
  //   }

  //   div p:last-child {
  //     font-weight: bold;
  //     color: ${({ theme }) => theme.colors.heading};
  //   }
  // }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .grid1 {
      display: block;
    }
    .container {
      padding: 0 1px;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
