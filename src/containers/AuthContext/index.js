import React, {useState} from 'react';

export const AuthContext = React.createContext([])

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;