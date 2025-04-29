import { useState } from 'react';
import { useRequest } from '../hook/hooks';
import { productListApi } from '../api/urls';
import ProductsList from '../components/templates/ProductsList';

import { ClipLoader } from 'react-spinners';

function Products() {
  const [lastItem, setLastItem] = useState(10);
  const url = productListApi(0, lastItem);
  const response = useRequest(url);

  // update products amount
  function changePageHandler() {
    setLastItem(lastItem + 10);
  }

  return (
    <>
      <div style={{ padding: '.6em' }}>{response.data && <ProductsList products={response.data} />}</div>

      {response.isLoading && (
        <div style={{ margin: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ClipLoader color="#1e90ff" size="1.2rem" />
        </div>
      )}
    </>
  );
}

export default Products;
