import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "dark-theme";
  });

  function handleTheme() {
    setTheme((theme) =>
      theme === "light-theme" ? "dark-theme" : "light-theme",
    );
  }

  useEffect(
    function() {
      localStorage.setItem("theme", theme);
      document.children[0].classList.remove(
        theme === "light-theme" ? "dark-theme" : "light-theme",
      );
      document.children[0].classList.add(theme);
    },
    [theme],
  );

  return (
    <header className="bg-elements">
      <div className="mx-auto flex max-w-[var(--max-width)] justify-between gap-2 px-4 py-8 shadow-sm sm:px-10">
        <h1 className="text-lg font-extrabold sm:text-2xl">
          <Link>Where in the world?</Link>
        </h1>
        <button
          onClick={handleTheme}
          className="flex items-center gap-2 font-semibold capitalize sm:text-lg"
        >
          <ion-icon
            name={`moon${theme === "light-theme" ? "-outline" : ""}`}
          ></ion-icon>
          <span>{theme.split("-")[0]} Mode</span>
        </button>
      </div>
    </header>
  );
}
