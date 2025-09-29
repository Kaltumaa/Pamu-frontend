import { useState } from "react";
import { CheckCircle } from "lucide-react";
import step1Img from "@/assets/images/service-img-08.jpg";
import step2Img from "@/assets/images/static-box-02.png";
import step3Img from "@/assets/images/static-box-03.jpg";
import step4Img from "@/assets/images/static-box-04.jpg";

const steps = [
  { 
    id: 1, 
    number: "01", 
    title: "Shipment Booking & Documentation", 
    desc: "We gather shipment details, prepare all customs and compliance paperwork, and coordinate with all relevant stakeholders to ensure a seamless shipment process. Our dedicated documentation team minimizes errors, reduces delays, and provides detailed tracking updates, helping you save time and avoid unexpected costs while ensuring full regulatory compliance.", 
    img: step1Img,
    features: ["Document Preparation", "Stakeholder Coordination", "Error Minimization", "Real-time Updates"]
  },
  { 
    id: 2, 
    number: "02", 
    title: "Customs Clearance", 
    desc: "Our licensed customs experts liaise directly with authorities to expedite clearance while adhering to all local and international regulations. We manage all permits, tariffs, and inspections, ensuring your goods move quickly and smoothly. This proactive approach reduces risk of hold-ups and ensures your supply chain operates efficiently.", 
    img: step2Img,
    features: ["Licensed Experts", "Regulatory Compliance", "Permit Management", "Risk Reduction"]
  },
  { 
    id: 3, 
    number: "03", 
    title: "Freight Forwarding", 
    desc: "We coordinate multi-modal transport — air, sea, and land — to move your cargo securely from origin to destination. With a strong network of trusted partners, we optimize routes, reduce shipping costs, and maintain real-time visibility of your shipment. Our solutions are tailored to meet your business needs, ensuring reliability, speed, and efficiency.", 
    img: step3Img,
    features: ["Multi-modal Transport", "Route Optimization", "Cost Reduction", "Real-time Visibility"]
  },
  { 
    id: 4, 
    number: "04", 
    title: "Final Handover", 
    desc: "Your cargo is delivered safely to its final destination with full support at every step. We handle last-mile logistics, provide proof of delivery, and offer post-delivery assistance if needed. Our goal is to provide a worry-free shipping experience so you can focus on growing your business while we manage the complexities of logistics.", 
    img: step4Img,
    features: ["Safe Delivery", "Proof of Delivery", "Post-delivery Support", "Worry-free Experience"]
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 text-base md:text-lg font-semibold uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1e2a5e] leading-tight">
            Streamlined logistics solutions <br /> for your business
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row bg-white rounded-3xl p-6 gap-4 md:h-[520px] w-full shadow-2xl border border-gray-100">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`cursor-pointer flex relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out [will-change:flex] group ${
                activeStep === step.id 
                  ? "flex-[6] md:flex-[6]" 
                  : "flex-[0.8] md:flex-[0.8]"
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
              onClick={() => setActiveStep(step.id)}
            >
              {/* Collapsed - Only show on desktop when not active */}
              {activeStep !== step.id && (
                <div className="hidden md:flex w-full h-full flex-col items-center justify-between py-6 bg-white rounded-2xl shadow-inner">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#1e2a5e]">{step.number}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#1e2a5e] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>
              )}

              {/* Expanded - Always show on mobile, conditional on desktop */}
              <div className={`flex flex-col md:flex-row w-full animate-fadeIn bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ${activeStep === step.id ? 'block' : 'block md:hidden'}`}>
                {/* Image */}
                <div className="w-full md:w-[45%] h-48 md:h-full transition-all duration-700 ease-in-out">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-[55%] flex flex-col relative p-6 md:p-8 transition-all duration-700 ease-in-out justify-center items-start">
                  {/* Number in top-right */}
                  <div className="absolute top-4 right-4 md:top-5 md:right-5 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-base md:text-lg font-bold text-[#1e2a5e]">{step.number}</span>
                  </div>

                  {/* Centered heading + desc */}
                  <div className="flex flex-col justify-center h-full text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1e2a5e] mb-3 md:mb-4 text-center md:text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed text-justify mb-4">
                      {step.desc}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-lg">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300'
                  }`}
                />
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                    activeStep > step.id ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .group:hover .animate-pulse {
          animation-play-state: paused;
        }
      ` }} />
    </section>
  );
};

export default HowItWorks;