import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')) || {});

  return <LoginContext.Provider value={{ userInfo, setUserInfo }}>{children}</LoginContext.Provider>;
}

function useLogin() {
  const { userInfo, setUserInfo } = useContext(LoginContext);

  return [userInfo, setUserInfo];
}

export default LoginProvider;
export { useLogin };
