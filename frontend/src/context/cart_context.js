import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";
//import { useLaterCartContext } from "./Latercartcontext";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");
  // if (localCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];

  return parsedData;
};
const getLocalLaterData = () => {
  let localCartData = localStorage.getItem("addlatercart");
  // if (localCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];

  return parsedData;
};
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: "",
  laterCart: getLocalLaterData(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { fetchCartData } = useLaterCartContext();
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const addToCartlater = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART_LATER",
      payload: { id, color, amount, product },
    });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setDecreaselater = (id) => {
    dispatch({ type: "SET_DECREMENT_LATER", payload: id });
  };
  const setIncrementlater = (id) => {
    dispatch({ type: "SET_INCREMENT_LATER", payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const removeItemlater = (id) => {
    dispatch({ type: "REMOVE_ITEM_LATER", payload: id });
  };
  // const addlater = (id) => {
  //   // dispatch({ type: "CART_TOTAL_ITEM" });
  //   // dispatch({ type: "CART_TOTAL_PRICE" });

  //   localStorage.setItem("addlatercart", JSON.stringify(state.cart));
  //   dispatch({ type: "ADD_LATER", payload: id });
  //   dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
  //   // fetchCartData();
  // };

  // const fetchCartData1 = () => {
  //   const cartData = getLocalCartData();
  //   dispatch({ type: "REFRESH_CART_DATA", payload: cartData });
  // };
  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const clearCartlater = () => {
    dispatch({ type: "CLEAR_CART_LATER" });
  };
  const moveToLater = (id) => {
    dispatch({ type: "MOVE_TO_LATER", payload: { id } });
  };
  // to add the data in localStorage
  // get vs set
  const moveToCart = (id) => {
    dispatch({ type: "MOVE_TO_CART", payload: { id } });
  };

  // const moveToCart = (id) => {
  //   const selectedItem = state.laterCart.find((item) => item.id === id);

  //   if (selectedItem) {
  //     const updatedLaterCart = state.laterCart.filter((item) => item.id !== id);
  //     const updatedCart = [...state.cart, selectedItem];

  //     // Update localStorage for both carts
  //     localStorage.setItem("addlatercart", JSON.stringify(updatedLaterCart));
  //     localStorage.setItem("thapaCart", JSON.stringify(updatedCart));

  //     dispatch({
  //       type: "MOVE_TO_CART",
  //       payload: { updatedCart, updatedLaterCart },
  //     });
  //   }
  // };
  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,

        moveToLater,
        moveToCart,
        setDecreaselater,
        setIncrementlater,
        removeItemlater,
        clearCartlater,
        addToCartlater,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
// Next time using same ussercontext and same usereducer;
// import { createContext, useContext, useReducer, useEffect } from "react";
// import reducer from "../reducer/cartReducer";

// const CartContext = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("thapaCart");
//   // if (localCartData === []) {
//   //   return [];
//   // } else {
//   //   return JSON.parse(localCartData);
//   // }
//   const parsedData = JSON.parse(localCartData);
//   if (!Array.isArray(parsedData)) return [];

//   return parsedData;
// };

// const initialState = {
//   // cart: [],
//   cart: getLocalCartData(),
//   total_item: "",
//   total_price: "",
//   shipping_fee: 50000,
// };

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToCart = (id, color, amount, product) => {
//     dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
//   };

//   // increment and decrement the product

//   const setDecrease = (id) => {
//     dispatch({ type: "SET_DECREMENT", payload: id });
//   };

//   const setIncrement = (id) => {
//     dispatch({ type: "SET_INCREMENT", payload: id });
//   };

//   // to remove the individual item from cart
//   const removeItem = (id) => {
//     dispatch({ type: "REMOVE_ITEM", payload: id });
//   };

//   // to clear the cart
//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   // to add the data in localStorage
//   // get vs set

//   useEffect(() => {
//     // dispatch({ type: "CART_TOTAL_ITEM" });
//     // dispatch({ type: "CART_TOTAL_PRICE" });
//     dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

//     localStorage.setItem("thapaCart", JSON.stringify(state.cart));
//   }, [state.cart]);

//   return (
//     <CartContext.Provider
//       value={{
//         ...state,
//         addToCart,
//         removeItem,
//         clearCart,
//         setDecrease,
//         setIncrement,
//       }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCartContext = () => {
//   return useContext(CartContext);
// };

// export { CartProvider, useCartContext };
