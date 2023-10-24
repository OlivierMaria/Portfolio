import { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);

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

      <button className="mode flex">
        <span className="icon-moon-o"></span>
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
