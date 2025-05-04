import styles from '../../styles/Home.module.scss';
import Card from '../module/Card';
import Empty from './Empty';

function ProductsList({ display, lastProduct }) {
  return (
    <div className={display.length ? styles.productsList : ''}>
      {display.length ? (
        display.map((i, index) => (index === display.length - 1 ? <Card info={i} key={i.id} ref={lastProduct} /> : <Card info={i} key={i.id} />))
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default ProductsList;
