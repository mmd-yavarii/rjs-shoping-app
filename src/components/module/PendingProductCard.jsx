import { updateProductRequest } from '../../helper/functions';
import styles from '../../styles/PendingProductCard.module.scss';

import { FcAcceptDatabase, FcDeleteDatabase } from 'react-icons/fc';

function PendingProductCard({ info }) {
  const { name, image, category, price, discount, description } = info;

  // accept and reject handler
  async function acceptOrRejectHandler(isAccept) {
    try {
      await updateProductRequest(isAccept, info);
      alert('Request processed successfully.');
      location.reload();
    } catch (error) {
      alert('An error occurred while processing the request: ' + error.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoConttainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>

        <div className={styles.info}>
          <h4>{name}</h4>
          <p>cattegory : {category}</p>
          <p>price : {price.toLocaleString()}</p>
          <p>discount : {discount}</p>
          <br />
          <p className={styles.description}>
            <span>description : </span>
            {description}
          </p>
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button onClick={() => acceptOrRejectHandler(true)}>
          <FcAcceptDatabase />
        </button>
        <button onClick={() => acceptOrRejectHandler(false)}>
          <FcDeleteDatabase />
        </button>
      </div>
    </div>
  );
}

export default PendingProductCard;
