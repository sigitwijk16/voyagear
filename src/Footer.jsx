import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24 mt-8 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-2 gap-4 justify-items-center">
        <div className="text-left">
          <h2 className="text-base lg:text-xl font-semibold">Column 1</h2>
          <p>This is the content of column 1.</p>
          <p>This is the content of column 1.</p>
          <p>This is the content of column 1.</p>
        </div>
        <div className="text-left">
          <h2 className="text-base lg:text-xl font-semibold">Column 2</h2>
          <p>This is the content of column 2.</p>
          <p>This is the content of column 2.</p>
          <p>This is the content of column 2.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
