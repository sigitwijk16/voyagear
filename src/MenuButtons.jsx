import React from "react";

const MenuButtons = () => {
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-40 mt-12">
      <div className="flex flex-col items-center">
        <img src="../src/assets/telephone.png" className="w-12 md:w-20" alt="" />
        <p className="text-sm md:text-base mt-2 text-center">Panggil Montir</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="../src/assets/telephone.png" className="w-12 md:w-20" alt="" />
        <p className="text-sm md:text-base mt-2 text-center">Panggil Montir</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="../src/assets/telephone.png" className="w-12 md:w-20" alt="" />
        <p className="text-sm md:text-base mt-2 text-center">Panggil Montir</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="../src/assets/telephone.png" className="w-12 md:w-20" alt="" />
        <p className="text-sm md:text-base  mt-2 text-center">Panggil Montir</p>
      </div>
    </div>
  );
};

export default MenuButtons;
