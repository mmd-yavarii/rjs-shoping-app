import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './Layout/Layout';
import { useUserInfo } from './context/UserProvider';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import Bookmark from './pages/Bookmark';
import NotFound from './pages/404';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';

function App() {
  const [userInfo, setUserInfo] = useUserInfo();

  return (
    <Layout isLogin={!!userInfo.id}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/add" element={<AddProduct />} />

        <Route path="/profile" element={!!userInfo.id ? <Profile /> : <Navigate to="/" replace={true} />} />
        <Route path="/login" element={!!userInfo.id ? <Navigate to="/profile" replace={true} /> : <Login />} />
        <Route path="/signup" element={!!userInfo.id ? <Navigate to="/profile" replace={true} /> : <Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
