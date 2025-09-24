import React from "react";

const Map: React.FC = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7899915157213!2d39.66979977526679!3d-4.06318279591056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401321f95a29df%3A0x7219e5f1e4d405cf!2sMombasa%20Trade%20Centre%20Building!5e0!3m2!1sen!2ske!4v1758726735578!5m2!1sen!2ske" 
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PAMU Services Limited Location"
      />

      {/* Floating Contact Box */}
      <div className="absolute top-20 left-10 bg-white shadow-lg rounded-lg p-6 w-72 z-10">
        <h4 className="text-lg font-semibold text-red-600 mb-2">Mombasa</h4>
        <p className="flex items-center text-gray-800 mb-2">
          <i className="icofont-phone text-blue-600 mr-2" /> +254 (0) 795 065 062
        </p>
        <p className="text-gray-800">
          Email:{" "}
          <a
            href="mailto:info@pamuservices.co.ke"
            className="text-blue-600 hover:underline"
          >
            info@pamuservices.co.ke
          </a>
        </p>
      </div>
    </section>
  );
};

export default Map;
