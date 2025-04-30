import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter((i) => i.id != action.payload.id);
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={(state, dispatch)}>{children}</CartContext.Provider>;
}

function useCart() {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
}

export default CartProvider;
export { useCart };
