import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "context/Context";

import Button from "components/Button";
import Container from "components/Container";

import './style.css';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const cartLength = Object.keys(cart).length;

  const buyItems = () => {
    setCart({})
  }

  return (
    <Container>
      <h1>Cart - {cartLength} items</h1>
      <div className="cart-row">
        <p><b>Fruit</b></p>
        <p><b>Quantity - Price</b></p>
      </div>
      {
        Object.keys(cart).map((key) => {
          let name = key;
          let quantity = cart[key];
          let price = cart[key] * 5;

          return (
            <div key={name} className="cart-row">
              <p>{name}</p>
              <p>{quantity} - ${price}.00</p>
            </div>
          )
        })
      }
      <Button onClick={buyItems}>Buy items</Button>
    </Container>
  );
}

export default Cart;
