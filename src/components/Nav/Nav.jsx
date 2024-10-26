import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="d-flex align-items-center justify-content-around">
      <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" to="/about">
        O mnie
      </Link>
      <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" to="/gallery">
        Galeria
      </Link>
      <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" to="/trips">
        Wycieczki
      </Link>
      <Link className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" to="/contact">
        Kontakt
      </Link>
    </nav>
  );
};

export default Nav;
