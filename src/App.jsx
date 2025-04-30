import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useLogin } from './context/LoginProvider';

function App() {
  const [userInfo] = useLogin();

  const isLogin = userInfo?.length > 0;
  const userRole = userInfo?.[0]?.role ?? '';

  return (
    <Layout userRole={userRole}>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/login" element={isLogin ? <Navigate to="/profile" replace={true} /> : <Login />} />
        <Route path="/signup" element={isLogin ? <Navigate to="/profile" replace={true} /> : <Signup />} />
        <Route path="/profile" element={isLogin ? <Profile /> : <Navigate to="/login" replace={true} />} />
      </Routes>
    </Layout>
  );
}

export default App;
