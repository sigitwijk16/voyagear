// App.js
import React from "react";
import Navbar from "./Navbar";
import CarouselDefault from "./Carousel";
import MenuButtons from "./MenuButtons";
import GoogleMapWidget from "./GoogleMapWidget";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container px-4 lg:mx-auto max-w-screen-xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mt-8">
            <p>
              <span className="font-bold">Voyagear</span> hadir sebagai solusi
              tepat untuk semua kebutuhan kendaraan Anda. Kami menawarkan
              berbagai layanan yang dirancang untuk membantu Anda menjaga
              kendaraan Anda dalam kondisi prima, mulai dari layanan mekanik
              terpercaya hingga penjualan suku cadang berkualitas.{" "}
            </p>
          </div>
          <div className="col-span-12 mb-8 overflow-hidden">
            <MenuButtons />
          </div>
          <div className="col-span-12">
            <h1 className="text-base md:text-xl font-bold mx-auto px-4 mb-4">
              Lokasi Anda
            </h1>
            <GoogleMapWidget />
          </div>
          <div className="col-span-12 h-fit">
            <h1 className="text-base md:text-xl font-bold mx-auto px-4 mb-4">
              Tawaran untuk Anda
            </h1>
            <CarouselDefault />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default App;
