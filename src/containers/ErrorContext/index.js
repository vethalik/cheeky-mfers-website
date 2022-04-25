import React, {useState} from 'react';

export const ErrorContext = React.createContext({})

const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState({})

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;