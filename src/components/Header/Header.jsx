import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import logo from "../../assets/icon/logo.svg";
import flag from "../../assets/icon/FlagaKenii.svg";

const Header = () => {
  return (
    <header className="d-flex text-white align-items-center justify-content-between  w-100">
      <div className="logo__name d-flex align-items-center">
        <Link to="/">
          <img id="logo" className="m-1" src={logo} alt="Logo 'Odkryj Kenię z Lukasem Safaris'" />
        </Link>
        <div className="logo__i__flaga d-flex align-items-center">
          <h1>
            <Link className="text-white fs-2 ms-2 link-underline link-underline-opacity-0" to="/">
              Odkryj Kenię z Lukas Safaris
            </Link>
          </h1>
          <a href="https://pl.wikipedia.org/wiki/Kenia" target="_blank" rel="noopener noreferrer">
            <img id="Kenia" src={flag} alt="Flaga Kenii" className="ms-2" />
          </a>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
