import { createContext, useContext, useState } from 'react';

// Criar um contexto para o tema
const ThemeContext = createContext();

// Hook personalizado para acessar o contexto do tema
export const useTheme = () => useContext(ThemeContext);

// Provedor de tema que envolve sua aplicação
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Definir as propriedades do tema com base no modo
  const theme = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      <div style={{ background: theme.backgroundColor, color: theme.color, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
