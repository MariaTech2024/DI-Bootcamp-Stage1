//EXERCISE 1: Implement a Theme Switcher
//Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.
import './App.css';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#333" : "#fff" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}


function App() {
    return (
        <div>
            <h1>Exercise 1:</h1>
            <ThemeProvider>
            <div className="App">
        <h1>Theme Switcher</h1>
        <ThemeSwitcher />
      </div>
            </ThemeProvider>
            <h1>Exercise 2:</h1>
            <CharacterCounter/>
            <h1>Exercise 3:</h1>
            <TodoList/>
        </div>
    );
}

export default App;