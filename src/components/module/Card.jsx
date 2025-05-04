import { Link } from 'react-router-dom';
import styles from '../../styles/Card.module.scss';

import { TiStarFullOutline } from 'react-icons/ti';

import BookmarkBtn from './BookmarkBtn';

function Card({ info }) {
  const { name, image, rating, discount, price, id } = info;

  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`} state={info} className={styles.imageContainer}>
        <img src={image} alt={name} />
      </Link>

      <div>
        <p className={styles.name}>{name}</p>

        <div className={styles.bookmark}>
          <BookmarkBtn info={info} />
        </div>

        <div className={styles.ratingAndDiscount}>
          <div className={styles.rating}>
            <TiStarFullOutline opacity="0.4" />
            <span>{rating}</span>
          </div>
        </div>

        {discount ? (
          <div className={styles.discountedPrice}>
            {!!discount && <p className={styles.discount}>-{discount * 100}%</p>}
            <span className={styles.lastPrice}>${price.toLocaleString()}</span>
            <p>${(price * (1 - discount)).toLocaleString()}</p>
          </div>
        ) : (
          <p>${price.toLocaleString()}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
