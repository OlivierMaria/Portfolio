import { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex">
      <button
        className="hamburger__menu"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Burger_Menu
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">A propos</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projets</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button>light</button>

      {showModal && (
        <div className="fixed">
          <ul className="modal__wrapper">
            <li>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                False
              </button>
            </li>
            <li>
              <a href="">A propos</a>
            </li>

            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projets</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
