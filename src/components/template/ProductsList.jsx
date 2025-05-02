import styles from '../../styles/Home.module.scss';

function ProductsList({ display, lastProduct }) {
  return (
    <div>
      {display.map((i, index) =>
        index === display.length - 1 ? (
          <h1 key={i.id} ref={lastProduct}>
            {i.name}
          </h1>
        ) : (
          <h1 key={i.id}>{i.name}</h1>
        )
      )}
    </div>
  );
}

export default ProductsList;
