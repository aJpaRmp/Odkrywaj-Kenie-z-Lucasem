const Nav = () => {
  return (
    <nav className="d-flex align-items-center justify-content-around">
      <a className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" href="#About">
        O mnie
      </a>
      <a className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" href="#Galerry">
        Galeria
      </a>
      <a className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" href="#Trips">
        Wycieczki
      </a>
      <a className="link-offset-2 link-underline link-underline-opacity-0 link-light nav__a" href="#Contact">
        Kontakt
      </a>
    </nav>
  );
};

export default Nav;
