import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/Colors";
import { Title } from "../Styles/Title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #000;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>PizzaRestaurant 🍕</Logo>
    </NavbarStyled>
  );
}
