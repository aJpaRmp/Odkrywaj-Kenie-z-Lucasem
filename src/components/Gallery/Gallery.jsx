import { useState, useEffect } from "react";
import arrow from "../../assets/icon/arrow.png";
import cancel from "../../assets/icon/cancel.png";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        const mappedImages = data.map((image) => ({
          ...image,
          fileName: new URL(`../../assets/gallery/${image.fileName}`, import.meta.url).href,
        }));
        setImages(mappedImages);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  const showPopup = (index) => {
    setCurrentImgIndex(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const showNextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="Gallery" className="w-100 d-flex flex-column justify-content-center align-items-center ">
      <div className="gallery ">
        <h1 className="text-center ">Zdjęcia</h1>
        <ul className="gallery__ul d-flex flex-wrap">
          {images.map((image, index) => (
            <li
              key={index}
              className="gallery__item overflow-hidden border border-3 border-light"
              onClick={() => showPopup(index)}
            >
              <img src={image.fileName} alt={image.alt} className="gallery__img object-fit-cover " loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
      {popupVisible && (
        <div className="popup d-flex flex-wrap position-fixed align-items-center align-content-center justify-content-center h-100 w-100">
          <button aria-label="Zamknij popup" className="popup__close" onClick={closePopup}>
            <img src={cancel} alt="ikonka zamknęcia" />
          </button>
          <img src={images[currentImgIndex].fileName} alt="" className="popup__img" />
          <button aria-label="Poprzednie zdjęcie" className="popup__arrow popup__arrow--left" onClick={showPreviousImg}>
            <img src={arrow} alt="ikonka strzałki w lewo" />
          </button>
          <button aria-label="Następne zdjęcie" className="popup__arrow popup__arrow--right" onClick={showNextImg}>
            <img src={arrow} alt="ikonka strzałki w prawo" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
