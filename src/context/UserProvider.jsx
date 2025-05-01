import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')) ?? {});

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userInfo));
    if (userInfo[0]) {
      setUserInfo(userInfo[0]);
    }
  }, [userInfo]);

  return <UserContext.Provider value={[userInfo, setUserInfo]}>{children}</UserContext.Provider>;
}

function useUserInfo() {
  return useContext(UserContext);
}

export default UserProvider;
export { useUserInfo };
