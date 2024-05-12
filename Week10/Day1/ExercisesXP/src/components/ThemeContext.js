//Exercise 1: Implement a Theme Switcher
//Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.

import React, { createContext, useContext, useState } from "react";

//Create a new context for the theme
const ThemeContext = createContext();

//ThemeProvider component to provide theme context to its children
function ThemeProvider({ children }) {
  //State to hold the current theme, initialized to "light"
  const [theme, setTheme] = useState("light");

  //Function to toggle between light and dark themes
  const toggleTheme = () => {
    //Update the theme based on the previous theme value
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  //Provide the theme context and toggleTheme function to its children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//Custom hook to consume the theme context
function useTheme() {
  //Access the theme context
  const context = useContext(ThemeContext);
  
  //If the context is not found, throw an error
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  
  return context;
}

export { ThemeProvider, useTheme };