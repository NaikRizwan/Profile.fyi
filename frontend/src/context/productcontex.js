import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
// const API = [
//   {
//     id: 100,
//     name: "iPhone X",
//     company: "Apple",
//     price: 6000000,
//     colors: ["#ff0000", "#000000", "#CDD0D0"],
//     image: "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a Snapdragon processor with a 5n chip in it. It has a 200MP camera in the rear and 100MP in front, perfect for selfie lovers. It also supports HDR content, meaning you can watch 4K content on it.",
//     category: "mobile",
//     featured: true,
//   },
//   {
//     id: 101,
//     name: "Samsung Galaxy S21",
//     company: "Samsung",
//     price: 5000000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "The Samsung Galaxy S21 comes with a 6.2-inch AMOLED display, 120Hz refresh rate, and Exynos 2100 processor. It has a triple camera setup with a 64MP main sensor.",
//     category: "mobile",
//     featured: false,
//   },
//   {
//     id: 102,
//     name: "OnePlus 9",
//     company: "OnePlus",
//     price: 4000000,
//     colors: ["#ff0000", "#000000"],
//     image: "https://images.pexels.com/photos/3797371/pexels-photo-3797371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "The OnePlus 9 features a 6.55-inch Fluid AMOLED display with a 120Hz refresh rate. It is powered by the Snapdragon 888 processor and has a 48MP camera.",
//     category: "mobile",
//     featured: true,
//   },
//   {
//     id: 103,
//     name: "Google Pixel 6",
//     company: "Google",
//     price: 4500000,
//     colors: ["#FFFFFF", "#FF5733"],
//     image: "https://images.pexels.com/photos/5054352/pexels-photo-5054352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Google Pixel 6 comes with a 6.4-inch OLED display, Google's own Tensor chip, and a 50MP main camera. It runs on pure Android and is known for its camera performance.",
//     category: "mobile",
//     featured: false,
//   },
//   {
//     id: 104,
//     name: "Sony WH-1000XM4",
//     company: "Sony",
//     price: 3000000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/1569324/pexels-photo-1569324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Sony WH-1000XM4 is an over-ear wireless noise-canceling headphone with up to 30 hours of battery life and excellent sound quality.",
//     category: "accessories",
//     featured: true,
//   },
//   {
//     id: 105,
//     name: "MacBook Pro",
//     company: "Apple",
//     price: 12000000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "MacBook Pro with M1 chip delivers exceptional performance, with a 13-inch Retina display, and up to 20 hours of battery life.",
//     category: "laptop",
//     featured: true,
//   },
//   {
//     id: 106,
//     name: "Dell XPS 13",
//     company: "Dell",
//     price: 11000000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/5082564/pexels-photo-5082564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Dell XPS 13 is a high-performance laptop with a 13.4-inch InfinityEdge display, Intel Core i7 processor, and sleek design.",
//     category: "laptop",
//     featured: false,
//   },
//   {
//     id: 107,
//     name: "Apple Watch Series 6",
//     company: "Apple",
//     price: 4000000,
//     colors: ["#ff0000", "#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Apple Watch Series 6 features a blood oxygen sensor, ECG, always-on Retina display, and a range of fitness tracking features.",
//     category: "wearable",
//     featured: true,
//   },
//   {
//     id: 108,
//     name: "iPad Pro",
//     company: "Apple",
//     price: 8500000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/5082563/pexels-photo-5082563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "iPad Pro with M1 chip features a 12.9-inch Liquid Retina XDR display, 5G capability, and Apple Pencil support.",
//     category: "tablet",
//     featured: false,
//   },
//   {
//     id: 109,
//     name: "Samsung Galaxy Tab S7",
//     company: "Samsung",
//     price: 7500000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/4112052/pexels-photo-4112052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Samsung Galaxy Tab S7 comes with an 11-inch LTPS IPS LCD display, Snapdragon 865+ processor, and S Pen support.",
//     category: "tablet",
//     featured: true,
//   },
//   {
//     id: 110,
//     name: "Bose QuietComfort 35 II",
//     company: "Bose",
//     price: 2500000,
//     colors: ["#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/1391395/pexels-photo-1391395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Bose QuietComfort 35 II is a wireless noise-canceling headphone with Alexa voice control and up to 20 hours of battery life.",
//     category: "accessories",
//     featured: false,
//   },
//   {
//     id: 111,
//     name: "Fitbit Versa 3",
//     company: "Fitbit",
//     price: 2000000,
//     colors: ["#ff0000", "#000000", "#FFFFFF"],
//     image: "https://images.pexels.com/photos/1546651/pexels-photo-1546651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "Fitbit Versa 3 features built-in GPS, heart rate monitoring, sleep tracking, and 6+ days of battery life.",
//     category: "wearable",
//     featured: false,
//   }
// ];

// const API = "http://localhost:3001/api/data";
// console.log("hello",API);
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  // featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
