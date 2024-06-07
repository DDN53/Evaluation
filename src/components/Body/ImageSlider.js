import React, { useState } from "react";
import "./imageSlider.css"; // Make sure to import the CSS file

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = (slide) => ({
    backgroundImage: `url(${slide})`,
  });

  return (
    <div className="img-slider">
      <div
        className="img-slider-img"
        style={slideStylesWidthBackground(slides[currentIndex])}
      >
        {/* Navigation buttons for larger screens */}
      </div>
      <div className="img-slider-btn">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`img-slider-dot-btn ${
              currentIndex === index ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
