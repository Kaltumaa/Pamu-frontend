import { Link } from "react-router-dom";
import contactImage from "@/assets/images/bg_6.jpg"; // adjust path to match your setup

const ContactHero = () => {
  return (
    <section className="relative w-full mt-4 lg:mt-6 mb-12 lg:mb-16 flex justify-center">
      {/* Hero container slightly wider */}
      <div className="w-full max-w-[95%] md:max-w-[92%] lg:max-w-[98%] h-[250px] md:h-[350px] lg:h-[500px] relative">
        {/* Background image with rounded corners */}
        <img
          src={contactImage}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-[40px] lg:rounded-[60px]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-[40px] lg:rounded-[60px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full text-white max-w-3xl px-6 sm:px-10 lg:px-16 text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">CONTACT US</h1>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              PAMU SERVICES LIMITED
            </Link>
            <span className="opacity-70">›</span>
            <span className="opacity-90">CONTACT US</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
