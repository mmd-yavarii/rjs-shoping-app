import { useState } from 'react';

import { TbShoppingCartPlus } from 'react-icons/tb';

import { useCart } from '../../context/CartProvider';
import { MdExposurePlus1 } from 'react-icons/md';
import { TbExposureMinus1 } from 'react-icons/tb';

import styles from '../../styles/CartControllers.module.scss';

function CartControllers({ info }) {
  const [cart, dispatchCart, countProductInCart] = useCart();
  const [count, setCount] = useState(countProductInCart(info) || 0);

  // add to cart
  function addToCart() {
    setCount(count + 1);
    dispatchCart({ type: 'ADD', payload: info });
  }

  // remove from cart
  function removeFromCart() {
    setCount(count - 1);
    dispatchCart({ type: 'REMOVE', payload: info });
  }

  return (
    <div className={styles.container}>
      {count ? (
        <>
          <button onClick={removeFromCart}>
            <TbExposureMinus1 />
          </button>
          <p>{count}</p>
          <button onClick={addToCart}>
            <MdExposurePlus1 />
          </button>
        </>
      ) : (
        <button onClick={addToCart} className={styles.add}>
          <TbShoppingCartPlus /> <span> Add to cart</span>
        </button>
      )}
    </div>
  );
}

export default CartControllers;
