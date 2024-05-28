import React from "react";

import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl z-30">
      <img
        src="/images/carousel4.png"
        alt="image 1"
        className="h-fit w-full object-cover"
      />
      <img
        src="/images/carousel1.png"
        alt="image 1"
        className="h-fit w-full object-cover"
      />
      <img
        src="/images/carousel2.png"
        alt="image 1"
        className="h-fit w-full object-cover"
      />
      <img
        src="/images/carousel3.png"
        alt="image 1"
        className="h-fit w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault;
