import { useContext } from "react";
import { ThemeContext } from "@/Providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
