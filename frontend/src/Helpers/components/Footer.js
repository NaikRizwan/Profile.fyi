// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <Wrapper>
//         <section className="contact-short">
//           <div className="grid grid-two-column">
//             <div>
//               <h3>Ready to get started?</h3>
//               <h3>Talk to us today</h3>
//             </div>

//             <div>
//               <Button className="btn hireme-btn">
//                 <NavLink to="/products"> Get Started </NavLink>
//               </Button>
//             </div>
//           </div>
//         </section>
//         {/* footer section */}

//         <footer>
//           <div className="container grid grid-four-column">
//             <div className="footer-about">
//               <h3>Jamia Stationary</h3>
//               <p>Jamia Stationery: Where quality meets affordability. </p>
//             </div>
//             <div className="footer-subscribe">
//               <h3>Subscribe to get important updates</h3>
//               <form action="#">
//                 <input
//                   className="login_inputf"
//                   type="email"
//                   name="email"
//                   placeholder="YOUR E-MAIL"
//                 />

//                 <input
//                   className="login_buttonf"
//                   type="submit"
//                   value="subscribe"
//                 />
//               </form>
//             </div>
//             <div className="footer-social">
//               <h3>Follow Us</h3>
//               <div className="footer-social--icons">
//                 <div>
//                   <a href=" https://www.instagram.com/md_rizwan_naik">
//                     <FaDiscord className="icons" />
//                   </a>
//                 </div>
//                 <div>
//                   <a href=" https://www.instagram.com/md_rizwan_naik">
//                     <FaInstagram className="icons" />
//                   </a>
//                 </div>
//                 <div>
//                   <a href=" https://www.instagram.com/md_rizwan_naik">
//                     <FaYoutube className="icons" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="footer-contact">
//               <h3>Call Us</h3>
//               <h3>+91 6005341553</h3>
//             </div>
//           </div>

//           <div className="footer-bottom--section">
//             <hr />
//             {/* <div className="container grid grid-two-column ">
//               <p>
//                 @{new Date().getFullYear()} Jamia Stationary. All Rights
//                 Reserved
//               </p>
//               <div>
//                 <p>PRIVACY POLICY</p>
//                 <p>TERMS & CONDITIONS</p>
//               </div>
//             </div> */}
//             <p style={{ textAlign: "center" }}>
//               {" "}
//               @{new Date().getFullYear()} Jamia Stationary. All Rights Reserved
//             </p>
//           </div>
//         </footer>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }
//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }
//   footer {
//     padding: 14rem 0 1px 0;
//     background-color: #36454f;
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;
//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};
//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }
//   .footer-bottom--section {
//     padding-top: 5rem;
//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;
//       .grid div:last-child {
//         justify-self: center;
//       }
//     }
//     footer {
//       padding: 9rem 0 1px 0;
//     }
//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;

// export default Footer;
import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Wrapper = styled.section`
  /* Footer.css */

  .footer {
    background-color: midnightblue;
    color: #fff;
    margin-top: 3px;
    padding: 30px 10px 10px 10px;
    font-family: Arial, sans-serif;
  }

  .social-media {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid cornflowerblue;
  }

  .social-icons a {
    color: #fff;
    font-size: 24px;
    margin-right: 20px;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #ccc;
  }

  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-column {
    flex: 1;
    padding: 20px;
  }

  .footer-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .footer-column p {
    margin-bottom: 10px;
    color: papayawhip;
    font-size: 14px;
    font-family: "monica-ext-font_YIBBBFG";
  }

  .footer-bottom {
    text-align: center;
    /* margin-top: 20px; */
    padding-top: 9px;
    border-top: 1px solid cornflowerblue;
  }
  p.a {
    color: papayawhip;
  }
  * a {
    color: papayawhip;
  }
`;
const Footer = () => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColoredLetters = () => {
    const text = "The Stationery Corner!";
    const coloredLetters = text.split("").map((letter, index) => {
      const color = generateRandomColor();
      return (
        <span key={index} style={{ color }}>
          {letter}
        </span>
      );
    });
    return coloredLetters;
  };
  return (
    <Wrapper>
      <footer className="footer">
        <section className="social-media">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/thestationerycorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.twitter.com/thestationerycorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://www.twitter.com/thestationerycorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            {/* Add other social media icons as needed */}
          </div>
        </section>

        <section className="footer-content">
          <div className="footer-column">
            <h6 className="footer-heading">{generateColoredLetters()}</h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="footer-column">
            <h6 className="footer-heading">Products</h6>
            <p>
              <a href="#!">Angular</a>
            </p>
            <p>
              <a href="#!">React</a>
            </p>
            <p>
              <a href="#!">React</a>
            </p>
            <p>
              <a href="#!">React</a>
            </p>
            {/* Add more product links */}
          </div>

          <div className="footer-column">
            <h6 className="footer-heading">Useful Links</h6>
            <p>
              <a href="#!">Pricing</a>
            </p>
            <p>
              <a href="#!">Settings</a>
            </p>
            <p>
              <a href="#!">Settings</a>
            </p>
            <p>
              <a href="#!">Settings</a>
            </p>
            {/* Add more useful links */}
          </div>

          <div className="footer-column">
            <h6 className="footer-heading">Contact</h6>
            <p>
              <IoMdHome /> New York, NY 10012, US
            </p>
            <p>
              <MdEmail /> info@example.com
            </p>
            <p>
              <FaPhoneAlt /> 7051790026
            </p>
            <p>
              <FaPhoneAlt /> 6005341553
            </p>
            {/* Add more contact details */}
          </div>
        </section>

        <div className="footer-bottom">
          <p style={{ color: "papayawhip", fontWeight: "bold" }}>
            &copy; 2023. All Rights Reserved. {generateColoredLetters()}
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
