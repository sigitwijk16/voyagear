import React from "react";

const MenuButtons = () => {
  return (
    <div className="grid grid-cols-4 mx-8 md:mx-64 mt-12">
      <div className="flex flex-col items-center col-span-1">
        <img
          src="../src/assets/telephone.png"
          className="w-10 md:w-16"
          alt=""
        />
        <p className="text-xs md:text-base mt-2 text-center">Panggil Montir</p>
      </div>
      <div className="flex flex-col items-center col-span-1">
        <img
          src="../src/assets/telephone.png"
          className="w-10 md:w-16"
          alt=""
        />
        <p className="text-xs md:text-base mt-2 text-center">Service</p>
      </div>
      <div className="flex flex-col items-center col-span-1">
        <img
          src="../src/assets/telephone.png"
          className="w-10 md:w-16"
          alt=""
        />
        <p className="text-xs md:text-base mt-2 text-center">Panggil Derek</p>
      </div>
      <div className="flex flex-col items-center col-span-1">
        <img
          src="../src/assets/telephone.png"
          className="w-10 md:w-16"
          alt=""
        />
        <p className="text-xs md:text-base  mt-2 text-center">Sparepart</p>
      </div>
    </div>
  );
};

export default MenuButtons;
