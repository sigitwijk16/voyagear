// GoogleMapWidget.js
import React from "react";

const GoogleMapWidget = () => {
  return (
    <div className="h-[30vh] md:h-[75vh] rounded-lg overflow-hidden mt-4 mb-8">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253012.29469468!2d110.15942831088738!3d-7.756153406477904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sUniversitas%20Amikom%20Yogyakarta!5e0!3m2!1sid!2sid!4v1715182038158!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapWidget;
