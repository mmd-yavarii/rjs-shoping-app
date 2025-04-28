import { BsCart3 } from 'react-icons/bs';
import Rating from './Rating';

import styles from '../../styles/ProductCard.module.scss';
import { Link } from 'react-router-dom';

function ProductCard({ info }) {
  const { id, image, name, price, rating, discount } = info;
  const encodeInfo = JSON.stringify(info);

  return (
    <div className={styles.container}>
      <Link to={`/${id}`} state={encodeInfo}>
        <img src={image} width="200px" alt="" />
      </Link>

      <div>
        <div>
          <Link to="">
            <h4>{name}</h4>
          </Link>

          <Rating rate={rating} />
        </div>

        <div className={styles.info}>
          <div>
            {!!discount && (
              <p className={styles.prevPrice}>
                <span>{price}$</span>
                <span className={styles.discount}>-{discount}%</span>
              </p>
            )}

            <p className={styles.price}>{discount ? price * discount : price} $ </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
