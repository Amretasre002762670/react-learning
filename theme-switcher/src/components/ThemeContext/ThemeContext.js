import React, { useContext, createContext, useState, useEffect } from 'react';

// create the theme context
const ThemeContext = createContext();

// custom hooks to use the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
}

// Theme provider component
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        return localStorage.setItem('theme', newTheme); // Persist theme in localStorage
    }

    useEffect(() => {
        // Apply the theme to body
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
