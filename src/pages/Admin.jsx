import { useEffect, useState } from 'react';
import { getPendingRequest } from '../helper/functions';
import PendingProductCard from '../components/module/PendingProductCard';

function Admin() {
  const [pendingProducts, setPendingProducts] = useState([]);

  useEffect(() => {
    getPendingRequest().then((res) => setPendingProducts(res));
  }, []);

  return (
    <div>
      {pendingProducts.length ? (
        <div>
          <h4>Pending products</h4>
          {pendingProducts.map((i) => (
            <PendingProductCard key={i.id} info={i} />
          ))}
        </div>
      ) : (
        <h4 style={{ width: '100%', textAlign: 'center', marginTop: '100px' }}>There's no product</h4>
      )}
    </div>
  );
}

export default Admin;
