import Nav from "../Nav/Nav";
import logo from "../../assets/logo.png";
import flag from "../../assets/FlagaKenii.svg";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between">
      <div className="logo__name d-flex align-items-center">
        <img id="logo" src={logo} alt="Logo 'Odkryj Kenię z Lukasem Safaris'" />
        <div className="logo__i__flaga d-flex  align-items-center flex-column">
          <h1>Odkryj Kenię z Lukas Safaris</h1>
          <img id="Kenia" src={flag} alt="Flaga Kenii" />
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
