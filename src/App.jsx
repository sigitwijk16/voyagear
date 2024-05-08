// App.js
import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MenuButtons from "./MenuButtons";
import GoogleMapWidget from "./GoogleMapWidget";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg mt-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <GoogleMapWidget />
          </div>
          <div className="col-span-12">
            <Carousel />
          </div>
          <div className="col-span-12">
            <MenuButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
