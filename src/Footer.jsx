import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 lg:py-24 px-6 md:px-0">
      <div className="ml-0 md:ml-48 lg:ml-60">
        <div className="container mx-auto grid grid-cols-2 w-2/3 gap-8 lg:gap-16 justify-items-center">
          <div className="w-full text-left items-center col-span-1">
            <h2 className="text-sm lg:text-xl text-wrap text-justify font-bold">
              Hubungi Kami
            </h2>
            <p className="text-sm lg:text-base mt-2">Alamat:</p>
            <p className="text-left text-sm lg:text-base">
              Jl. Ring Road Utara, Condongcatur, Kec. Depok, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta
            </p>
            <p className="text-left text-sm lg:text-base mt-2">
              Nomor Telepon:
            </p>
            <p className="text-left text-sm lg:text-base">(021) 2345-2828</p>
            <p className="text-left text-sm lg:text-base mt-2">Email:</p>
            <p className="text-left text-sm lg:text-base">
              voyagear@amikom.ac.id
            </p>
          </div>
          <div className="w-full text-left items-start col-span-1">
            <h2 className="text-sm lg:text-xl font-bold">Social Media</h2>
            <p className="text-left text-sm lg:text-base mt-2">Facebook</p>
            <p className="text-left text-sm lg:text-base mt-2">Instagram</p>
            <p className="text-left text-sm lg:text-base mt-2">Twitter</p>
          </div>
          <div className="w-full items-start col-span-2">
            <p className="text-left items-baseline text-sm lg:text-base">
              ©Voyagear 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg mt-4 md:mt-16">
        <div className="flex flex-col justify-center text-left items-center">
          <div className="grid grid-row">
            <p className="text-left text-sm lg:text-xl font-semibold mt-4">
              Anggota Kelompok:
            </p>
            <p className="text-left text-sm lg:text-base mt-2">
              21.11.3893 - Sigit Wijonarko
            </p>
            <p className="text-left text-sm lg:text-base mt-2">
              21.11.3957 - Ma’ruf Syamsudin Ash Sidiq
            </p>
            <p className="text-left text-sm lg:text-base mt-2">
              21.11.3904 - Kavi Raja
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
