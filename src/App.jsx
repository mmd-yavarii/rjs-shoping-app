import { Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
