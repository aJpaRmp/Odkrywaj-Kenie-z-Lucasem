import me from "../../assets/gallery/img20.jpg";
import me2 from "../../assets/gallery/img37.jpg";
import rotate from "../../assets/icon/rotate.svg";
import { useState, useEffect } from "react";

const About = () => {
  const birthDate = new Date(1999, 2, 22);
  const [age, setAge] = useState(0);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      if (!hasBirthdayPassed) {
        age--;
      }
      return age;
    };

    setAge(calculateAge());
  }, [birthDate]);

  const handleSwapImages = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <section id="About" className="d-flex justify-content-around w-100">
      <div className="oMnie d-flex flex-column justify-content-center align-item-center position-relative w-75">
        <div>
          <h1>Cześć !!</h1>
          <p>
            Nazywam się Lukas, mam {age} lat, urodziłem się 22 marca 1999 roku w{" "}
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="https://pl.wikipedia.org/wiki/Mombasa"
              target="_blank"
            >
              Mombasie
            </a>{" "}
            , w{" "}
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="https://pl.wikipedia.org/wiki/Kenia"
              target="_blank"
            >
              Kenii
            </a>
            .
          </p>
          <p>
            Pasjonuje mnie oprowadzanie ludzi po safari, by pokazać im, jak wyjątkowa i różnorodna jest nasza przyroda.
            Mam głęboką miłość do mojego kraju, który zachwyca pięknem swojej natury.
          </p>
          <p>
            Uczę się języka polskiego, aby zminimalizować barierę językową między nami i sprawić, aby nasze wycieczki
            były jak najlepsze.
          </p>
        </div>
      </div>
      <div className="div__me__img position-relative w-25">
        {/* Zmieniamy kolejność obrazów na podstawie isSwapped */}
        <div
          className={`border rounded-5 border-light position-absolute overflow-hidden me me__first ${
            isSwapped ? "two" : "one"
          }`}
        >
          <img
            loading="lazy"
            className="me_img object-fit-cover w-100 "
            src={me}
            alt="Moje zdjecie, miło cię widzieć"
          />
        </div>
        <div
          className={`border rounded-5 border-light position-absolute overflow-hidden me me__second ${
            isSwapped ? "one" : "two"
          }`}
        >
          <img
            loading="lazy"
            className="me2_img object-fit-cover w-100 h-100"
            src={me2}
            alt="Moje zdjecie, miło cię widzieć"
          />
        </div>
        <button type="button" id="me__arrow" className="btn btn-link" onClick={handleSwapImages}>
          <img loading="lazy" src={rotate} alt="strzałka zmieniająca widoczność zdjęcia" />
        </button>
      </div>
    </section>
  );
};

export default About;
