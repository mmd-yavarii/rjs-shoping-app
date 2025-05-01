import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './Layout/Layout';
import { useUserInfo } from './context/UserProvider';
import Profile from './pages/Profile';

function App() {
  const [userInfo, setUserInfo] = useUserInfo();

  return (
    <Layout isLogin={!!userInfo.id}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={!!userInfo.id ? <Profile /> : <Navigate to="/" replace={true} />} />
        <Route path="/login" element={!!userInfo.id ? <Navigate to="/profile" replace={true} /> : <Login />} />
        <Route path="/signup" element={!!userInfo.id ? <Navigate to="/profile" replace={true} /> : <Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
