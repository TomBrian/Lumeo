import React from "react";

type Theme = "light" | "dark";

// Create the theme context
export const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

// Create the theme provider component
export const ThemeProvider: React.FC = ({ children }: any): any => {
  const [theme, setTheme] = React.useState<Theme>("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
