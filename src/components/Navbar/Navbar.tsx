import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__link">
        <Logo className="nav__logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__item-link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__item-link">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__item-link">
            Stories
          </a>
        </li>
      </ul>
      <button type="button" className="nav__button">
        Download for free
      </button>
    </nav>
  );
};
