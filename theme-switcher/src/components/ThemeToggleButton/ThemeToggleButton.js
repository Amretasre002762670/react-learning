import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';


const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch theme to { theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}

export default ThemeToggleButton;