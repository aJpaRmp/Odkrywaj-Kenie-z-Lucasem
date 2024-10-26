import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        const mappedImages = data.map((image) => ({
          ...image,
          fileName: new URL(`../../assets/gallery/${image.fileName}`, import.meta.url).href,
        }));
        setImages(mappedImages);
        console.log("Images loaded:", mappedImages); // Sprawdź, czy obrazy są poprawnie załadowane
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  return (
    <section id="Gallery">
      <div className="gallery">
        <h2>Galeria zdjęć</h2>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image.fileName} className="d-block w-100" alt={image.alt} />
              <Carousel.Caption>
                <h3>{image.alt}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
