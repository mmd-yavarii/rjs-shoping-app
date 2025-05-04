import { v4 as uuidv4 } from 'uuid';

import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

function reducer(state, action) {
  const theItem = state.find((i) => i.id == action.payload.id);

  switch (action.type) {
    case 'ADD': {
      if (theItem) {
        return state.map((item) => {
          if (item.cartId === theItem.cartId) return { ...item, count: item.count + 1 };
          return item;
        });
      } else {
        const data = { ...action.payload, count: 1 };
        return [...state, data];
      }
    }

    case 'REMOVE':
      if (theItem.count > 1) {
        return state.map((item) => {
          if (item.cartId === theItem.cartId) return { ...item, count: item.count - 1 };
          return item;
        });
      } else {
        return state.filter((i) => i.id != theItem.id);
      }

    case 'CLEAR':
      return [];
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // count a product in cart
  function countProductInCart(info) {
    const theItem = state.find((i) => i.id == info.id);
    if (!theItem) return 0;
    return theItem.count;
  }

  return <CartContext.Provider value={[state, dispatch, countProductInCart]}>{children}</CartContext.Provider>;
}

function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
export { useCart };
