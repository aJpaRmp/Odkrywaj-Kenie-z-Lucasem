import image3 from "../../../assets/rest/image3.jpg";
import rotate from "../../../assets/icon/rotate.svg";
import elephant from "../../../assets/icon/elephant.png";
import { useState } from "react";

const PartTwoMain = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const handleSwapImages = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="main__divTwo d-flex flex-row-reverse justify-content-around align-items-center">
      <div className="second_info">
        <span className="second__span">
          <ul>
            <li>
              <img src={elephant} alt="ikonka głowy słonia" />
              Wszystkie wycieczki organizujemy dowolnego dnia tygodnia.
            </li>
            <li>
              <img src={elephant} alt="ikonka głowy słonia" />
              Jesteśmy elastyczni i dopasowujemy do każdego klienta.
            </li>
            <li>
              <img src={elephant} alt="ikonka głowy słonia" />
              Zapewniamy opiekę przewodnika mówiącego po Polsku.
            </li>
            <li>
              <img src={elephant} alt="ikonka głowy słonia" />
              Mamy wieloletnie doświadczenie.
            </li>
          </ul>
        </span>
      </div>
      <div className="main__divTwo_img">
        <img
          className="main__img3"
          src={image3}
          alt="Żyrafa i słoń stojące naprzeciwko siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
        />
      </div>
      <button type="button" id="arrow" className="btn" onClick={handleSwapImages}>
        <img src={rotate} alt="strzałka zmieniania widocznego zdjęcia" />
      </button>
    </div>
  );
};

export default PartTwoMain;
