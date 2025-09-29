import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "@/assets/images/clients/client1.png";
import client2 from "@/assets/images/clients/client2.png";
import client3 from "@/assets/images/clients/client3.png";
import client4 from "@/assets/images/clients/client4.png";
import client6 from "@/assets/images/clients/client6.png";
import client7 from "@/assets/images/clients/client7.png";
import bgImage from "@/assets/images/bg_3.jpg";

const ClientsSection: React.FC = () => {
  const clientLogos = [
    { id: 1, src: client1, alt: "Client 1" },
    { id: 2, src: client2, alt: "Client 2" },
    { id: 3, src: client3, alt: "Client 3" },
    { id: 4, src: client4, alt: "Client 4" },
    { id: 6, src: client6, alt: "Client 6" },
    { id: 7, src: client7, alt: "Client 7" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      { 
        breakpoint: 1400, 
        settings: { 
          slidesToShow: 5,
          autoplaySpeed: 3000,
        } 
      },
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 4,
          autoplaySpeed: 3000,
        } 
      },
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 3,
          autoplaySpeed: 2500,
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          autoplaySpeed: 2500,
          centerMode: true,
          centerPadding: '20px',
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: '40px',
        } 
      },
    ],
  };

  return (
    <section
      className="py-8 md:py-12 lg:py-14 bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          <span className="block text-gray-200 text-sm sm:text-base md:text-lg mb-1 md:mb-2">SOME OF OUR</span>
          Clients
        </h1>

        <div className="px-2 sm:px-4">
          <Slider {...settings}>
            {clientLogos.map((client) => (
              <div key={client.id} className="px-1 sm:px-2">
                <div className="bg-white shadow-lg flex items-center justify-center h-16 sm:h-18 md:h-20 w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] mx-auto rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
