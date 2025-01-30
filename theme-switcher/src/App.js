import './App.css';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div className="app">
          <h1> React Theme Provider with Context API </h1>
          <ThemeToggleButton />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
