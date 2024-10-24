import Nav from "../Nav/Nav";
import logo from "../../assets/logo.png";
import flag from "../../assets/FlagaKenii.svg";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-around flex-wrap">
      <div className="logo__name d-flex align-items-center">
        <img id="logo" src={logo} alt="Logo 'Odkryj Kenię z Lukasem Safaris'" />
        <div className="logo__i__flaga d-flex  align-items-center ">
          <h1>Odkryj Kenię z Lukas Safaris</h1>
          <a href="https://pl.wikipedia.org/wiki/Kenia" target="_blank">
            <img id="Kenia" src={flag} alt="Flaga Kenii" />
          </a>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
