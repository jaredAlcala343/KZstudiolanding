import React, { useState } from 'react';
import './Start.css'; // Asegúrate de crear este archivo para los estilos

const Start = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

 

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="left-arrow">
        ❰
      </button>
      <div className="slider-content">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            {index === currentIndex && <img src={image} alt="slide" />}
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="right-arrow">
        ❱
      </button>
    </div>
  );
};

export default Start;

