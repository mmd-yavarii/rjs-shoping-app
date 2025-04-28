import { Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/:productId" element={<ProductDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
