import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        className="hamburger__menu icon-menu flex"
        onClick={() => {
          setShowModal(true);
        }}
      />

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">A propos</a>
          </li>
          <li>
            <a href="#project">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to Local Storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          // Get value to Local Storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal__wrapper">
            <li>
              <button
                className="icon-remove"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#project">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
