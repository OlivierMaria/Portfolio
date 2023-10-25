import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a
            href="https://github.com/OlivierMaria"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oliviermaria09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>

      <p>© 2023 Olivier Maria. Tous droits réservés</p>
    </footer>
  );
}
