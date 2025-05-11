import styles from '../../styles/Home.module.scss';
import Card from '../module/Card';
import Empty from './Empty';

function ProductsList({ display }) {
  return (
    <div className={display.length ? styles.productsList : styles.empty}>
      {display.length ? display.map((i, index) => <Card info={i} key={i.id} />) : <Empty />}
    </div>
  );
}

export default ProductsList;
