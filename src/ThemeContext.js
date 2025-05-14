import React, {  useState, useEffect ,createContext, useContext } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
const [isDarkMode, setIsDarkMode] = useState(
  localStorage.getItem('theme') === 'dark'
);

// 初始化时读取
useEffect(() => {
  const theme = isDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [isDarkMode]);

const toggleTheme = () => {
  setIsDarkMode(prev => !prev);
};

    return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);