import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  // Example global data
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [currency, setCurrency] = useState("INR");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        theme,
        setTheme,
        currency,
        setCurrency
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook (BEST PRACTICE)
export const useGlobal = () => useContext(GlobalContext);
