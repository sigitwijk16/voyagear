// App.js
import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MenuButtons from "./MenuButtons";
import GoogleMapWidget from "./GoogleMapWidget";
import Footer from "./Footer";
import User from "./User";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <User /> */}
      <div className="container mx-auto max-w-screen-lg mt-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <GoogleMapWidget />
          </div>
          <div className="col-span-12">
            <h1 className="text-xl md:text-2xl font-bold mx-auto px-4 mb-4">
              Tawaran untukmu
            </h1>
            <Carousel />
          </div>
          <div className="col-span-12">
            <MenuButtons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
