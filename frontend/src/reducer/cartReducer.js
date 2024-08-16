const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "ADD_TO_CART_LATER") {
    let { id, color, amount, product } = action.payload;

    // tackle the existing product

    let existingProduct = state.laterCart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.laterCart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        laterCart: [...state.laterCart, cartProduct],
      };
    }
  }
  // Inside your cartReducer
  if (action.type === "MOVE_TO_CART") {
    const { id } = action.payload;
    const selectedItem = state.laterCart.find((item) => item.id === id);

    if (selectedItem) {
      const updatedLaterCart = state.laterCart.filter((item) => item.id !== id);
      const updatedCart = [...state.cart, selectedItem];

      // Update localStorage for both carts
      localStorage.setItem("addlatercart", JSON.stringify(updatedLaterCart));
      localStorage.setItem("thapaCart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
        laterCart: updatedLaterCart,
      };
    }
    return state;
  }

  if (action.type === "MOVE_TO_LATER") {
    const { id } = action.payload;

    const selectedItem = state.cart.find((item) => item.id === id);

    if (selectedItem) {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const updatedLaterCart = [...state.laterCart, selectedItem];

      // Update localStorage for both carts
      localStorage.setItem("thapaCart", JSON.stringify(updatedCart));
      localStorage.setItem("addlatercart", JSON.stringify(updatedLaterCart));

      return {
        ...state,
        cart: updatedCart,
        laterCart: updatedLaterCart,
      };
    }
    return state;
  }
  if (action.type === "SET_DECREMENT_LATER") {
    let updatedProduct = state.laterCart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, laterCart: updatedProduct };
  }
  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT_LATER") {
    let updatedProduct = state.laterCart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, laterCart: updatedProduct };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "REMOVE_ITEM_LATER") {
    let updatedCart = state.laterCart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      laterCart: updatedCart,
    };
  }
  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CLEAR_CART_LATER") {
    return {
      ...state,
      laterCart: [],
    };
  }
  if (action.type === "ADD_LATER") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;

  //     initialVal = initialVal + price * amount;

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  // if (action.type === "REFRESH_CART_DATA") {
  //   return {
  //     ...state,
  //     cart: action.payload,

  //     // Update cart with the new data received
  //   };
  // }

  return state;
};

export default cartReducer;

// https://stackoverflow.com/questions/63117470/how-to-return-two-values-in-reduce#:~:text=You%20cannot%20return%20two%20values%20in%20reduce%20.
