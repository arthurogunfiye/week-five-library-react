import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import libraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Nav({ numberOfItemsInCart }) {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={libraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItemsInCart > 0 && (
              <span className="cart__length">{numberOfItemsInCart}</span>
            )}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link">
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// NOTES

// Visit https://fontawesome.com/v5/docs/web/use-with/react to read up on how to use FontAwesome icons
// in React

// In the index.js file, we have imported the ffg and added the imports to the library
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// library.add(faBars, faShoppingCart);

// Unlike vanilla JS where you can specify the path of an img in the src attribute, you cannot
// do so in React. You have to import the image and use it like done in lines 2 and 9.

// Using Link prevents page refresh. Page load is instantaneous and smooth.
