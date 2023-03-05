import { createContext, useContext } from "react";
import React, { useState } from "react";



export const DatosContext = createContext();

export const useDatos = () => {
  const context = useContext(DatosContext);
  return context;
};

export const DatosProvider = ({ children }) => {
  const [loger, setLoger] = useState(true);

  const loader = () => setLoger(false);

  return (
    <DatosContext.Provider
      value={{ loger, loader }}
    >
      {children}
    </DatosContext.Provider>
  );
};
