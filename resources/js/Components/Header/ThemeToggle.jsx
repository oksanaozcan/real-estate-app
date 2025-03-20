import { useContext } from "react";
import { ThemeContext } from "@/Providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="px-2 py-1.5 border rounded">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
