import { Package, Award, CheckCircle2 } from "lucide-react";
import truckTeamImg from "@/assets/images/banner_slider_4.jpg"; // replace with correct path

export default function AboutIntro() {
  return (
    <section className="py-8 md:py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
          {/* LEFT SIDE - IMAGE */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={truckTeamImg}
                alt="Logistics Team"
                className="w-full h-full object-cover"
              />

              {/* Overlay Label - responsive */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#0a2a5e] text-white w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center shadow-lg rounded-lg">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">25+</p>
                <p className="text-xs sm:text-sm font-medium text-center">Years of experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#0a2a5e] mb-3 uppercase tracking-wide">
              Who We Are
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-snug">
              Reducing costs and <br className="hidden sm:block" /> increasing efficiency
            </h2>
            <p className="text-gray-600 mb-6 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed">
              Pamu Services Limited is a leading provider of Customs Clearance, Freight Forwarding, and Transport Solutions licensed by the Kenya Revenue Authority. Established in 2004, we have over 20 years of experience delivering world-class logistics and supply chain services.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-10">
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-4 lg:p-5">
                <div className="bg-blue-50 p-2 lg:p-3 rounded-lg">
                  <Package className="w-5 h-5 lg:w-6 lg:h-6 text-[#0a2a5e]" />
                </div>
                <span className="font-medium text-gray-900 text-sm lg:text-base">
                  Strong network in customs & transport sector
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-4 lg:p-5">
                <div className="bg-blue-50 p-2 lg:p-3 rounded-lg">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-[#0a2a5e]" />
                </div>
                <span className="font-medium text-gray-900 text-sm lg:text-base">
                  Reliable and timely delivery solutions
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 lg:space-y-4 text-gray-700 text-sm lg:text-base">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#0a2a5e] flex-shrink-0" />
                With over four decades of experience providing solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
