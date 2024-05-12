import React from "react";

const Carousel = () => {
  const images = [
    "/images/promo1.jpeg",
    "/images/promo1.jpeg",
    "/images/promo1.jpeg",
    "/images/promo1.jpeg",
    "/images/promo1.jpeg"
    // "/images/promo2.jpeg",
    // "/images/promo3.jpeg",
    // "/images/promo4.jpeg",
    // "/images/promo5.jpeg"
  ];

  return (
    <div className="relative overflow-x-auto rounded-lg aspect-w-20 aspect-h-9 overflow-hidden max-w-screen mb-8">
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="inline-block min-w-full">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
