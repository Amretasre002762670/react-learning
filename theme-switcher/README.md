# Theme Switcher using React Context API

This is a simple implementation of a **theme switcher** using **React Context API**. The app allows the user to toggle between **light** and **dark mode** using a button. The selected theme is persisted across sessions using `localStorage`.

## Features
- **Light/Dark Mode Toggle**: Switch between light and dark themes with a button.
- **Persistent Theme Selection**: The selected theme is saved in `localStorage` to ensure that the theme remains consistent across sessions.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Context API**: A simple way to share state across components without having to pass props manually at every level.
- **localStorage**: Used for persisting the selected theme between sessions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/theme-switcher-react.git
   ```

2. Navigate to the project folder:

   ```bash
   cd theme-switcher-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

### ThemeContext

The `ThemeContext` provides the theme (`light` or `dark`) and a function (`toggleTheme`) to toggle between the two.

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to light mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme in localStorage
  };

  useEffect(() => {
    // Apply the theme to the body tag
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Main Component

```javascript
import React from 'react';
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
```

### CSS

The following CSS styles are applied based on the current theme (`light` or `dark`).

```css
/* Light theme */
body.light {
  background-color: #fff;
  color: #333;
}

button {
  padding: 10px 15px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

/* Dark theme */
body.dark {
  background-color: #333;
  color: #fff;
}

button {
  background-color: #444;
  color: #fff;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}
```

### Persisting Theme Selection Across Sessions

The theme selection is stored in `localStorage` to persist the theme across page reloads and future visits. The `useEffect` hook ensures that the body class is updated according to the theme whenever it changes, and the `theme` value is fetched from `localStorage` when the app first loads.

## How It Works

1. **ThemeContext**: The `ThemeContext` stores the current theme (`light` or `dark`) and provides a `toggleTheme` function to switch between the two.
2. **useEffect Hook**: Whenever the theme changes, the `useEffect` hook is triggered, updating the `className` of the `body` element to apply the correct theme styles.
3. **localStorage**: The current theme is saved to `localStorage` whenever the user switches between themes, ensuring the theme persists across sessions.

## Follow-Up: Improving Persistence

If you wanted to persist the theme selection even after the user closes the browser, `localStorage` is a perfect choice as it stores data persistently on the user's device until it's manually cleared. Alternatively, for more robust solutions across different browsers or devices, you could integrate server-side storage (e.g., a database) or cookies.

## Conclusion

This app demonstrates how to implement a **light/dark theme toggle** using **React Context API** and **localStorage**. The theme changes are immediately reflected in the UI and persisted across sessions for a better user experience.