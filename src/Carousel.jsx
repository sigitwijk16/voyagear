import React from "react";

const Carousel = () => {
  return (
    <div className="relative overflow-x-auto whitespace-nowrap w-full max-w-screen-lg mx-auto">
      <div className="flex" style={{ minWidth: "calc(4 * 16rem)" }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            className="inline-block w-64 h-32 mr-4 rounded-md bg-gray-300 p-4"
          >
            Item {id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
