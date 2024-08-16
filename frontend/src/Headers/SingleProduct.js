import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontex";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { Container } from "../styles/Container";
import FormatPrice from "../Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";

import { Button } from "../styles/Button";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API = "https://api.pujakaitem.com/api/products";

//const API = "http://localhost:3001/api/data";
//  console.log(API);
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    colors,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  //const [color, setColor] = useState(colors[0]);
  const [color, setColor] = useState(null);

  // Function to handle navigation to BuyNow with data

  useEffect(() => {
    if (colors && colors.length > 0) {
      // Set the initial color when colors data is available
      setColor(colors[0]);
    }
  }, [colors]); // Run this effect whenever colors data changes
  const handleProceedToBuy = () => {
    // Navigate to "buynow" route and pass data using state
    navigate("/buynow", { state: { singleProduct, color } });
  };
  if (isSingleLoading) {
    return (
      // <div className="page_loading">
      //   Loading.....
      // <div style={{ height: "100vh", width: "100%" }}>
      //   <div className="lds-hourglass">hii</div>
      // </div>
      <Wra>
        <div class="container">
          <div class="loader">
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--text"></div>
          </div>
        </div>
      </Wra>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 100} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>100% Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />

            {/* {stock > 0 && (
              <div>
                <div style={{ marginBottom: "13px" }} className="colors">
                  <p>
                    Color:
                    {colors.map((curColor, index) => {
                      return (
                        // <button
                        //   key={index}
                        //   style={{ backgroundColor: curColor }}
                        //   className={
                        //     color === curColor ? "btnStyle active" : "btnStyle"
                        //   }
                        //   onClick={() => setColor(curColor)}
                        // >
                        //   {color === curColor ? (
                        //     <FaCheck className="checkStyle" />
                        //   ) : null}
                        // </button>
                        <button
                          key={index}
                          style={{ backgroundColor: curColor }}
                          className={
                            color === curColor ? "btnStyle active" : "btnStyle"
                          }
                          onClick={() => setColor(curColor)}
                        >
                          {color === curColor ? (
                            <FaCheck className="checkStyle" />
                          ) : null}
                        </button>
                      );
                    })}
                  </p>
                </div>
                {/* <Button
                  className="btn"
                  onClick={() =>
                    navigate("/buynow", { state: { singleProduct, color } })
                  }
                >
                  Proceed To Buy
                </Button> *

                <Button
                  className="btn"
                  style={{ backgroundColor: "lightseagreen" }}
                  onClick={handleProceedToBuy}
                >
                  Buy Now
                </Button>
              </div>
            )}
            <hr /> */}
            {stock > 0 && <AddToCart product={singleProduct} />}
            {/* {stock > 0 && <AddToLaterCart product={singleProduct} />} */}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wra = styled.div`
  body,
  html {
    margin: 0;
    padding: 0;
  }

  .container {
    height: 100vh;
    width: 100vw;
    font-family: Helvetica;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    height: 20px;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .loader--dot {
    animation: loader 3s ease-in-out infinite;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    border: 2px solid white;
  }

  .loader--dot:first-child {
    background-color: #8cc759;
    animation-delay: 0.5s;
  }

  .loader--dot:nth-child(2) {
    background-color: #8c6daf;
    animation-delay: 0.4s;
  }

  .loader--dot:nth-child(3) {
    background-color: #ef5d74;
    animation-delay: 0.3s;
  }

  .loader--dot:nth-child(4) {
    background-color: #f9a74b;
    animation-delay: 0.2s;
  }

  .loader--dot:nth-child(5) {
    background-color: #60beeb;
    animation-delay: 0.1s;
  }

  .loader--dot:nth-child(6) {
    background-color: #fbef5a;
    animation-delay: 0s;
  }

  .loader--text {
    position: absolute;
    top: 200%;
    left: 0;
    right: 0;
    width: 4rem;
    margin: auto;
  }

  .loader--text:after {
    content: "Loading";
    font-weight: bold;
    animation: loading-text 3s infinite;
  }

  @keyframes loader {
    15% {
      transform: translateX(0);
    }

    45%,
    65% {
      transform: translateX(230px);
    }

    95% {
      transform: translateX(0);
    }
  }

  @keyframes loading-text {
    0% {
      content: "Loading";
    }

    25% {
      content: "Loading.";
    }

    50% {
      content: "Loading..";
    }

    75% {
      content: "Loading...";
    }
  }
`;
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
