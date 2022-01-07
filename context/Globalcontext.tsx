import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});
GlobalContext.displayName = "GlobalContext";

const GlobalContextProvider: React.FC = ({ children }) => {
  const [width, setWidth] = useState(true);

  useEffect(() => {
    window.innerWidth > 900 ? setWidth(true) : setWidth(false);

    const handleWindowResize = () => {
      if (window.innerWidth < 900) setWidth(false);
      else setWidth(true);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <GlobalContext.Provider value={{ width }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
