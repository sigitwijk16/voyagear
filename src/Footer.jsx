import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-2 gap-4 justify-items-center">
        <div className="w-full text-left overflow-hidden">
          <h2 className="text-base lg:text-xl text-wrap text-pretty text-justify font-bold">
            Hubungi Kami
          </h2>
          <p className="mt-2">Alamat:</p>
          <p className="text-left text-sm lg:text-base">
            Jl. Ring Road Utara, Ngringin, Condongcatur,
          </p>
          <p className="text-left text-sm lg:text-base">
            Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
          <p className="text-left text-sm lg:text-base mt-2">Nomor Telepon:</p>
          <p className="text-left text-sm lg:text-base">0822-2345-2828</p>
          <p className="text-left text-sm lg:text-base mt-2">Email:</p>
          <p className="text-left text-sm lg:text-base">
            voyagearm@amikom.ac.id
          </p>
          <p className="text-left text-sm lg:text-base mt-8">
            ©Voyagear 2024. All rights reserved
          </p>
        </div>
        <div className="w-full text-left items-start">
          <div className="grid grid-row">
            <h2 className="text-base lg:text-xl font-semibold">Social Media</h2>
            <p className="text-left text-sm lg:text-base mt-2">Facebook</p>
            <p className="text-left text-sm lg:text-base mt-2">Instagram</p>
            <p className="text-left text-sm lg:text-base mt-2">Twitter</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg mt-16">
        <div className="flex flex-col justify-center text-left items-center">
          <div className="grid grid-row">
            <p className="text-left text-base lg:text-xl font-semibold mt-4">
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
