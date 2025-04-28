import ProductCard from '../modules/ProductCard';

function ProductsList({ products }) {
  return (
    <>
      {products.map((i) => (
        <ProductCard info={i} key={i.id} />
      ))}
    </>
  );
}

export default ProductsList;
