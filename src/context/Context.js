import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState({
    Banana: 1,
    Apple: 2,
    Blueberry: 3,
  });

  return (
    <CartContext.Provider value={{ cart, setCart}}>{children}</CartContext.Provider>
  )
}

export default Context