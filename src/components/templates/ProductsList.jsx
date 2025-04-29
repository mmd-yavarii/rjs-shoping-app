import ProductCard from '../modules/ProductCard';

import styles from '../../styles/ProductsList.module.scss';

function ProductsList({ products }) {
  return (
    <div className={styles.container}>
      {products.map((i) => (
        <ProductCard info={i} key={i.id} />
      ))}
    </div>
  );
}

export default ProductsList;
