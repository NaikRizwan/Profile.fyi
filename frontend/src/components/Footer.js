import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../styles/Button";
const Footer = () => {
  return (
    <FooterWrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/products"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Profile.fyi</h3>
            <p>Profile.fyi: Where quality meets affordability.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <a href="https://www.instagram.com/md_rizwan_naik">
                <FaDiscord className="icons" />
              </a>
              <a href="https://www.instagram.com/md_rizwan_naik">
                <FaInstagram className="icons" />
              </a>
              <a href="https://www.instagram.com/md_rizwan_naik">
                <FaYoutube className="icons" />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>+91 6005341553</p>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Profile.fyi. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 4rem 6rem;
    background-color: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(50%);
    color: #fff;
    text-align: center;

    h3 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
    }

    .grid div:last-child {
      justify-self: center;
    }
  }

  footer {
    padding: 8rem 0;
    background-color: #000;
    color: #fff;

    h3 {
      color: #ff6347;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    p {
      color: #b3b3b3;
    }

    .footer-subscribe input[type="email"] {
      padding: 0.8rem 1.2rem;
      margin-right: 1rem;
      border-radius: 5px;
      border: none;
      outline: none;
    }

    .footer-subscribe input[type="submit"] {
      padding: 0.8rem 1.2rem;
      border-radius: 5px;
      background-color: #ff6347;
      border: none;
      cursor: pointer;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      justify-content: center;

      a {
        padding: 0.8rem;
        border-radius: 50%;
        background-color: #1a1a1a;
        color: #ff6347;
        font-size: 2.4rem;
        transition: all 0.3s ease;

        &:hover {
          color: #fff;
          background-color: #ff6347;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 4rem;
      text-align: center;

      hr {
        margin-bottom: 2rem;
        border-color: #2c2c2c;
      }

      p {
        font-size: 1.4rem;
        font-weight: 400;
      }

      div {
        display: flex;
        justify-content: center;
        gap: 2rem;

        p {
          cursor: pointer;
          transition: color 0.3s ease;

          &:hover {
            color: #ff6347;
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 90vw;
      padding: 3rem;
      transform: translateY(0%);
    }

    footer {
      padding: 6rem 0;
    }
  }
`;

export default Footer;
