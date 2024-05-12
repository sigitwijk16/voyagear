// App.js
import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MenuButtons from "./MenuButtons";
import GoogleMapWidget from "./GoogleMapWidget";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg mt-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mt-8">
            <p>
              <span className="font-bold text-justify">Voyagear</span> hadir
              sebagai solusi tepat untuk semua kebutuhan kendaraan Anda. Kami
              menawarkan berbagai layanan yang dirancang untuk membantu Anda
              menjaga kendaraan Anda dalam kondisi prima, mulai dari layanan
              mekanik terpercaya hingga penjualan suku cadang berkualitas.{" "}
            </p>
          </div>
          <div className="col-span-12">
            <MenuButtons />
          </div>
          <div className="col-span-12">
            <GoogleMapWidget />
          </div>
          <div className="col-span-12">
            <h1 className="text-base md:text-xl font-bold mx-auto px-4 mb-4">
              Tawaran untukmu
            </h1>
            <Carousel />
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default App;
