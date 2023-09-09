import React, { createContext, useContext, useState } from "react";

//create the context provider objecct
export const User_context = createContext(null);

export function MyUserContext({ children }) {
  const [account, setAccount] = useState(null);
  return (
    <User_context.Provider value={{ account, setAccount }}>
      {children}
    </User_context.Provider>
  );
}
