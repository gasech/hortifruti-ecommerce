import { useContext } from "react";
import { CartContext } from "context/Context";

import styled from "styled-components"

import Link from "components/Link"

const NavBar = () => {
  const { cart } = useContext(CartContext);
  
  const cartLength = Object.keys(cart).length;

  return (
    <Nav>
      <Link to="/">
        <h1>
          Hortifruti Shop
        </h1>
      </Link>
      <Link to="/cart">
        <h1>
          On cart: {cartLength}
        </h1>
      </Link>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  height: 70px;
  background-color: #23EF2A;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-left: 50px;
    margin-top: 14px;
    margin-right: 50px;
    color: white;
  }
`

export default NavBar;