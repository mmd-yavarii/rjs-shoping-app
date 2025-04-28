import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const { state } = useLocation();
  const prodduct = JSON.parse(decodeURIComponent(state));
  console.log(prodduct);

  return <div>ProductDetail</div>;
}

export default ProductDetail;
