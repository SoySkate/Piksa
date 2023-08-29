import React, { createContext, useContext, useState } from 'react';


export const AuthContext = React.createContext({});

export function AuthProvider({ children }:any) {
  const [verificacionExitosa, setVerificacionExitosa] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ verificacionExitosa, setVerificacionExitosa }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
