import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ fun }) => {
  const [isDark, setIsDark] = useState(false);
  const [Theme, setTheme] = useState("Black");
  const [ReverseTheme, setReverseTheme] = useState("white");

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "black" || (!savedTheme && prefersDark)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the document root
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "black");
      setTheme("black"); // Notify parent about the theme change
      setReverseTheme("white"); // Notify parent about the theme change
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "white");
      setTheme("white"); // Notify parent about the theme change
      setReverseTheme("black"); // Notify parent about the theme change

    }
    fun(Theme)
  }, [isDark, fun,Theme]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className={`p-2 rounded-lg dark:bg-${ReverseTheme} hover:bg-gray-200 dark:hover:bg-gray-300 transition-all`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className={`w-5 h-5 text-${Theme}`} />
      ) : (
        <Moon className={`w-5 h-5 text-${Theme}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
