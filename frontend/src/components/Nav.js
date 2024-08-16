// Navbar.js
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const NavLogo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 20px;
    top: 15px;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: all 0.3s ease;
  }

  &.active div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active div:nth-child(2) {
    opacity: 0;
  }

  &.active div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #444;
  }
`;

const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #ff6347;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 12px 0;
    width: 100%;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavLogo>Profile.fyi</NavLogo>
      <Hamburger onClick={toggleMenu} className={isOpen ? "active" : ""}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavItem exact to="/" activeClassName="active">
          Home
        </NavItem>
        <NavItem to="/about" activeClassName="active">
          About
        </NavItem>
        <NavItem to="/contact" activeClassName="active">
          Contact Us
        </NavItem>
        <NavItem to="/products" activeClassName="active">
          Products
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
