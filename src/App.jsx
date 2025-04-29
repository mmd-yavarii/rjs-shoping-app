import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  const isLogin = false;

  return (
    <Layout>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/login" element={isLogin ? <Navigate to="/profile" replace={true} /> : <Login />} />
        <Route path="/signup" element={isLogin ? <Navigate to="/profile" replace={true} /> : <Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
