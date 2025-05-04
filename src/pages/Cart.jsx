import styles from '../styles/Cart.module.scss';

import { useCart } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import CartControllers from '../components/module/CartControllers';
import Empty from '../components/template/Empty';

function Cart() {
  const [cartData] = useCart();
  const total = cartData.reduce((acc, item) => acc + item.price * item.count, 0);

  return cartData.length ? (
    <div className={styles.contaainer}>
      <div className={styles.cardContteiner}>
        {cartData.map((i) => (
          <CartCard key={i.id} info={i} />
        ))}
      </div>

      <div className={styles.checkoutContainer}>
        <div>
          <p>Total price : </p>
          <p>${total.toLocaleString()}</p>
        </div>
        <button>Check out</button>
      </div>
    </div>
  ) : (
    <Empty />
  );
}

export default Cart;

function CartCard({ info }) {
  const { name, image, price, discount, id } = info;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.info}>
        <Link to={`/product/${id}`} state={info} className={styles.imageContainer}>
          <img src={image} alt={name} />
        </Link>

        <div>
          <h5>{name}</h5>
          {!discount ? (
            <p>${price.toLocaleString()}</p>
          ) : (
            <>
              <div className={styles.discountedPrice}>
                {!!discount && <p className={styles.discount}>-{discount * 100}%</p>}
                <span className={styles.lastPrice}>${price.toLocaleString()}</span>
              </div>
              <p>${(price * (1 - discount)).toLocaleString()}</p>
            </>
          )}
        </div>
      </div>

      <CartControllers info={info} />
    </div>
  );
}
