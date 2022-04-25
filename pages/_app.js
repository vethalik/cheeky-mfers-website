import './styles.css'

import React from 'react';
import AuthContextProvider from "../src/containers/AuthContext";
import ErrorContextProvider from "../src/containers/ErrorContext";

const CustomApp = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <ErrorContextProvider>
        <Component {...pageProps} />
      </ErrorContextProvider>
    </AuthContextProvider>
  );
};

export default CustomApp;