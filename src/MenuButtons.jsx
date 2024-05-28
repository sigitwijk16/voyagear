import React from "react";

const MenuButtons = () => {
  return (
    <div className="grid grid-cols-4 mx-20 md:mx-72 mt-8 md:mt-12 gap-4">
      <div className="flex flex-col items-center col-span-2 md:col-span-1">
        <div className="px-4 md:px-2 py-4 rounded-xl border-2 border-black">
          <img
            src="./buttons/montir.png"
            className="w-10 md:w-16"
            alt="Panggil Montir"
          />
        </div>
        <p className="text-xs md:text-base mt-2 text-center">Panggil Montir</p>
      </div>
      <div className="flex flex-col items-center col-span-2 md:col-span-1">
        <div className="px-4 md:px-2 py-4 rounded-xl border-2 border-black">
          <img
            src="./buttons/service.png"
            className="w-10 md:w-16"
            alt="Service"
          />
        </div>
        <p className="text-xs md:text-base mt-2 text-center">Service</p>
      </div>
      <div className="flex flex-col items-center col-span-2 md:col-span-1">
        <div className="px-4 md:px-2 py-4 rounded-xl border-2 border-black">
          <img
            src="./buttons/derek.png"
            className="w-10 md:w-16"
            alt="Panggil Derek"
          />
        </div>
        <p className="text-xs md:text-base mt-2 text-center">Panggil Derek</p>
      </div>
      <div className="flex flex-col items-center col-span-2 md:col-span-1">
        <div className="px-4 md:px-2 py-4 rounded-xl border-2 border-black">
          <img
            src="./buttons/sparepart.png"
            className="w-10 md:w-16"
            alt="Sparepart"
          />
        </div>
        <p className="text-xs md:text-base mt-2 text-center">Sparepart</p>
      </div>
    </div>
  );
};

export default MenuButtons;
