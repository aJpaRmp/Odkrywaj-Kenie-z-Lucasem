import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const toggleMenu = () => {
      setMenuActive((prevState) => !prevState);
    };

    const button = document.querySelector(".button__nav");
    button.addEventListener("click", toggleMenu);

    return () => {
      button.removeEventListener("click", toggleMenu);
    };
  }, []);

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  return (
    <>
      <nav className={`d-flex p-1 align-items-center justify-content-around z-3 ${isMenuActive ? "active" : ""}`}>
        <Link
          to="/"
          className="link-offset-2 m-2 fw-bold  link-underline link-underline-opacity-0 link-light nav__link "
        >
          Strona Głowna
        </Link>
        <Link
          className="link-offset-2 m-2 fw-bold  link-underline link-underline-opacity-0 link-light nav__link "
          to="/about"
        >
          O mnie
        </Link>
        <Link
          className="link-offset-2 m-2 fw-bold  link-underline link-underline-opacity-0 link-light nav__link "
          to="/gallery"
        >
          Galeria
        </Link>
        <Link
          className="link-offset-2 m-2 fw-bold  link-underline link-underline-opacity-0 link-light nav__link "
          to="/trips"
        >
          Wycieczki
        </Link>
        <Link
          className="link-offset-2 m-2 fw-bold  link-underline link-underline-opacity-0 link-light nav__link "
          to="/contact"
        >
          Kontakt
        </Link>
      </nav>

      <button className={`button__nav border-0 bg-transparent ${isMenuActive ? "clicked" : ""}`} type="button">
        <div className="line bg-white rounded-4 m-2"></div>
        <div className="line bg-white rounded-4 m-2"></div>
        <div className="line bg-white rounded-4 m-2"></div>
      </button>
    </>
  );
};

export default Nav;
