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
      <nav className={`d-flex align-items-center justify-content-around ${isMenuActive ? "active" : ""}`}>
        <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__link" to="/about">
          O mnie
        </Link>
        <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__link" to="/gallery">
          Galeria
        </Link>
        <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__link" to="/trips">
          Wycieczki
        </Link>
        <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__link" to="/contact">
          Kontakt
        </Link>
      </nav>

      <button className={`button__nav ${isMenuActive ? "clicked" : ""}`} type="button">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </>
  );
};

export default Nav;
