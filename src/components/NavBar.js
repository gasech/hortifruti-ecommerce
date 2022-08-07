import styled from "styled-components"

import Link from "components/Link"

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>Hortifruti Shop</h1>
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

  h1 {
    margin-left: 50px;
    margin-top: 14px;
    color: white;
  }
`

export default NavBar;