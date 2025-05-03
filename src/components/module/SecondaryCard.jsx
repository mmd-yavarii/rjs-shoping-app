import { Link } from 'react-router-dom';

import styles from '../../styles/SecondaryCard.module.scss';

function SecondaryCard({ info, component }) {
  const { name, image, rating, discount, price, id } = info;

  return (
    <Link to={`/product/${id}`} className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imageContaner}>
          <img src={image} alt="" />
        </div>

        <div>
          <p className={styles.name}>{name}</p>
          <p>${(price * (1 - discount)).toLocaleString()}</p>
        </div>
      </div>

      <div>{component}</div>
    </Link>
  );
}

export default SecondaryCard;
