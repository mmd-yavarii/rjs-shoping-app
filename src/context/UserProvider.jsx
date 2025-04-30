import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')) || {});

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }, userInfo);

  return <UserContext.Provider value={(userInfo, setUserInfo)}>{children}</UserContext.Provider>;
}

function useUserInfo() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  return [userInfo, setUserInfo];
}

export default UserProvider;
export { useUserInfo };
