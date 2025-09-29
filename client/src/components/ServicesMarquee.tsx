import { Truck, Ship, Plane, Award, Train } from "lucide-react";

interface Service {
  title: string;
  icon: React.ReactNode;
}

export default function ServicesMarquee() {
  const services: Service[] = [
    { title: "Land Freight", icon: <Truck className="w-14 h-14" /> },
    { title: "Air Freight", icon: <Plane className="w-14 h-14" /> },
    { title: "Sea Import/Export", icon: <Ship className="w-14 h-14" /> },
    { title: "Rail Freight", icon: <Train className="w-14 h-14" /> },
    { title: "Project Cargo", icon: <Award className="w-14 h-14" /> },
  ];

  return (
    <section className="py-4 md:py-6 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee items-center whitespace-nowrap space-x-6 md:space-x-12 lg:space-x-16">
          {services.concat(services).map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 md:space-x-8 lg:space-x-12"
            >
              {/* Big text */}
              <span className="text-[40px] md:text-[60px] lg:text-[100px] font-extrabold text-gray-300 leading-none">
                {service.title}
              </span>

              {/* Icon separator */}
              <div className="flex items-center justify-center bg-blue-900 rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex-shrink-0">
                <div className="text-white scale-75 md:scale-100">{service.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      ` }} />
    </section>
  );
}
