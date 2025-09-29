import React, { useEffect, useState } from "react";
import banner1 from "@/assets/images/banner_slider.jpg";
import banner2 from "@/assets/images/banner_slider_2.jpg";

const slides = [
  {
    id: 1,
    image: banner1,
    title: "PAMU SERVICES LIMITED",
    subtitle: "From Pickup to Destination",
    description: "Reliable Logistics & Transport Solutions Across East Africa",
    button: "Learn More",
  },
  {
    id: 2,
    image: banner2,
    title: "Ready For Any Obstacle",
    subtitle: "From freight forwarding to last-mile delivery",
    description: "We move your business forward with speed and trust",
    button: "Read More",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: `scale(${currentSlide % 2 === 0 ? 1.1 : 1})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-4 opacity-0 animate-fade-in-delay-1">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            {slides[currentSlide].description}
          </p>
          
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-lg shadow-lg font-semibold opacity-0 animate-fade-in-delay-3">
            {slides[currentSlide].button}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white px-3 py-2 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white px-3 py-2 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((Date.now() % 8000) / 8000) * 100}%` 
          }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          .animate-fade-in-delay-1 {
            animation: fade-in 0.8s ease-out 0.2s forwards;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 0.8s ease-out 0.4s forwards;
          }
          
          .animate-fade-in-delay-3 {
            animation: fade-in 0.8s ease-out 0.6s forwards;
          }
        `
      }} />
    </section>
  );
};

export default Slider;