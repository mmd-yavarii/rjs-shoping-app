import { useState } from 'react';
import { useRequest } from '../hook/hooks';
import { productListApi } from '../api/urls';
import ProductsList from '../components/templates/ProductsList';

function Products() {
  const [lastItem, setLastItem] = useState(10);
  const url = productListApi(0, lastItem);
  const response = useRequest(url).data;

  // update products amount
  function changePageHandler() {
    setLastItem(lastItem + 10);
  }

  return <div style={{ padding: '.6em' }}>{response && <ProductsList products={response} />}</div>;
}

export default Products;
