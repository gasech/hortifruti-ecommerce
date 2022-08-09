import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "context/Context";

import Button from "components/Button";
import Container from "components/Container";


function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const buyItems = () => {
    setCart([])
  }

  return (
    <Container>
      <h1>Cart Page</h1>
      {
        cart.map((cart) => {
          return (
            <p key={cart} style={{fontSize: 20}}>{cart}</p>
          )
        })
      }
      <Button onClick={buyItems}>Buy items</Button>
    </Container>
  );
}

export default Cart;