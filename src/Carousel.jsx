import React from "react";

import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl ">
      <img src="/images/promo1.jpeg" alt="image 1" className="h-fit w-full object-cover" />
      <img src="/images/promo1.jpeg" alt="image 2" className="h-fit w-full object-cover" />
      <img src="/images/promo1.jpeg" alt="image 3" className="h-fit w-full object-cover" />
    </Carousel>
  );
}

export default CarouselDefault;
