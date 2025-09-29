import SEOHead from "@/components/SEOHead";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/assets/images/logo_footer.png";
import Hero from "@/components/ServicesDetsHero"

// ✅ Import service images
import img1 from "@/assets/images/service-img-01.jpg";
import img2 from "@/assets/images/service-img-02.jpg";
import img3 from "@/assets/images/service-img-03.jpg";
import img4 from "@/assets/images/service-img-04.jpg";
import img5 from "@/assets/images/service-img-05.jpg";
import img6 from "@/assets/images/service-img-06.jpg";
import img7 from "@/assets/images/service-img-07.jpg";
import img8 from "@/assets/images/service-img-08.jpg";

// 🌍 Enhanced Services Data with Better Information
const services = {
  customs: {
    title: "Customs Clearance",
    image: img1,
    description:
      "Smooth border crossings, zero stress. Our licensed customs experts take care of all paperwork and compliance, ensuring your cargo moves quickly and without delays.",
    features: [
      "Import & Export Documentation",
      "Duty Optimization Strategies", 
      "Seamless KRA Compliance",
      "Special Handling (Reefer & Hazardous Cargo)",
      "Cross Trade & Transshipment Support",
    ],
    benefits: [
      "24-48 hour clearance guarantee",
      "Duty optimization saving up to 15% on costs",
      "Expert guidance on trade regulations",
      "Seamless KRA compliance"
    ],
    process: [
      "Document preparation and submission",
      "Customs assessment and duty calculation", 
      "Payment processing and clearance",
      "Cargo release and delivery coordination"
    ],
    stats: {
      clearanceTime: "24-48 hours",
      successRate: "99.8%",
      costSavings: "Up to 15%",
      countries: "5+"
    }
  },
  "sea-freight": {
    title: "Sea Freight Import & Export",
    image: img2,
    description:
      "From Mombasa to the world — and back. We partner with major shipping lines to secure competitive rates and reliable schedules, whether it's full containers or oversized project cargo.",
    features: [
      "Full Container Load (FCL) Shipping",
      "Flat Racks & Out-of-Gauge Solutions",
      "Breakbulk & Heavy Lift Expertise",
      "Direct & Indirect Transshipments",
      "Global Network with Port-to-Door Options",
    ],
    benefits: [
      "Competitive rates with major shipping lines",
      "Door-to-door delivery across East Africa",
      "Flexible container options (20ft, 40ft, 45ft)",
      "Global network with reliable schedules"
    ],
    process: [
      "Booking confirmation and documentation",
      "Container loading and sealing",
      "Ocean transit with regular updates",
      "Port clearance and inland delivery"
    ],
    stats: {
      transitTime: "25-40 days",
      successRate: "99.5%",
      costSavings: "Up to 20%",
      routes: "50+"
    }
  },
  land: {
    title: "Land Freight",
    image: img3,
    description:
      "Your cargo, safely across East Africa. With our modern fleet and regional partnerships, we deliver reliably across borders — by road and rail.",
    features: [
      "Cross-Border Road Transport (Kenya, Uganda, Rwanda, Tanzania, DRC, South Sudan)",
      "LTL, FTL & Bulk Cargo Solutions",
      "Oversized & Heavy Cargo Transport",
      "GPS Real-Time Tracking",
      "SGR/MGR Rail Freight for Cost Savings",
    ],
    benefits: [
      "Cross-border expertise in 6 countries",
      "Flexible LTL and FTL options",
      "Rail freight for cost-effective long distances",
      "Modern fleet with reliable drivers"
    ],
    process: [
      "Route planning and border documentation",
      "Cargo loading and secure sealing",
      "Transit with GPS tracking updates",
      "Border clearance and final delivery"
    ],
    stats: {
      transitTime: "2-7 days",
      successRate: "99.2%",
      costSavings: "Up to 30%",
      countries: "6"
    }
  },
  air: {
    title: "Air Freight",
    image: img4,
    description:
      "When speed is non-negotiable, we fly your cargo safely and fast. Our air freight team ensures imports cleared in 48 hours and exports in just 24 hours.",
    features: [
      "Express Air Cargo Handling",
      "Global Network of Airlines",
      "24–48 Hour Clearance & Delivery",
      "Secure Handling for Fragile/High-Value Goods",
      "Custom Air Solutions for Urgent Shipments",
    ],
    benefits: [
      "Fastest delivery option available",
      "Global network with major airlines",
      "24-48 hour clearance guarantee",
      "Secure handling for valuable cargo"
    ],
    process: [
      "Booking confirmation and documentation",
      "Airport pickup and security screening",
      "Flight transit with tracking",
      "Customs clearance and delivery"
    ],
    stats: {
      clearanceTime: "24-48 hours",
      successRate: "99.9%",
      costSavings: "Time-critical",
      routes: "Global"
    }
  },
  project: {
    title: "Project Cargo Handling",
    image: img5,
    description:
      "From heavy lifts to complex routes, we manage large-scale cargo projects with precision. No matter the size, we make it possible — safely and on time.",
    features: [
      "Oversized & Heavy Lift Cargo Solutions",
      "Route Planning & Feasibility Studies",
      "Special Equipment (Cranes, Low Loaders, Forklifts)",
      "Risk Management & Safety First",
      "Tailored Solutions for Oil, Gas & Construction Projects",
    ],
    benefits: [
      "Specialized equipment for heavy cargo",
      "Expert route planning and feasibility studies",
      "Risk management and safety protocols",
      "Custom solutions for complex projects"
    ],
    process: [
      "Project assessment and planning",
      "Route feasibility and permits",
      "Specialized equipment deployment",
      "Oversized cargo transport and delivery"
    ],
    stats: {
      clearanceTime: "5-10 days",
      successRate: "98.5%",
      costSavings: "Custom pricing",
      routes: "Specialized"
    }
  },
  vehicle: {
    title: "Motor Vehicle Handling",
    image: img6,
    description:
      "Drive your imports home hassle-free. We handle vehicle clearance, transport, and inspections — ensuring your cars arrive safely and ready to roll.",
    features: [
      "Vehicle Clearance at Port & Border Points",
      "Secure Transport Inland",
      "Pre-Delivery Vehicle Inspection",
      "Fleet Importation Support",
    ],
    benefits: [
      "Specialized vehicle handling expertise",
      "Secure transport with insurance coverage",
      "Pre-delivery inspection and documentation",
      "Fleet importation support and management"
    ],
    process: [
      "Vehicle documentation and clearance",
      "Secure transport from port",
      "Pre-delivery inspection and testing",
      "Final delivery and handover"
    ],
    stats: {
      clearanceTime: "3-5 days",
      successRate: "99.5%",
      costSavings: "Up to 25%",
      routes: "Nationwide"
    }
  },
  cargo: {
    title: "Conventional Cargo Handling",
    image: img7,
    description:
      "Bulk or breakbulk, we've got it covered. Our team ensures safe handling, secure storage, and efficient delivery of your conventional cargo.",
    features: [
      "Bulk & General Cargo Handling",
      "Secure Storage Facilities",
      "Inventory Management Systems",
      "On-Site Cargo Quality Checks",
      "Flexible Solutions for All Cargo Types",
    ],
    benefits: [
      "Secure storage facilities with 24/7 monitoring",
      "Advanced inventory management systems",
      "Quality checks and cargo protection",
      "Flexible handling for all cargo types"
    ],
    process: [
      "Cargo receipt and quality inspection",
      "Secure storage and inventory management",
      "Order processing and preparation",
      "Loading and delivery coordination"
    ],
    stats: {
      clearanceTime: "2-4 days",
      successRate: "99.3%",
      costSavings: "Up to 20%",
      routes: "Regional"
    }
  },
  consultancy: {
    title: "Import & Export Consultancy",
    image: img8,
    description:
      "Trade smarter, not harder. Our advisory team helps you navigate compliance, reduce costs, and unlock new markets with confidence.",
    features: [
      "International Trade Compliance Guidance",
      "Market Entry & Analysis",
      "Duty & Tax Optimization",
      "Risk Assessment & Mitigation",
      "Custom Logistics Planning",
    ],
    benefits: [
      "Expert guidance on trade regulations",
      "Market analysis and entry strategies",
      "Duty optimization and cost reduction",
      "Risk assessment and mitigation planning"
    ],
    process: [
      "Initial consultation and assessment",
      "Market analysis and strategy development",
      "Compliance guidance and documentation",
      "Implementation support and monitoring"
    ],
    stats: {
      clearanceTime: "Consultation",
      successRate: "100%",
      costSavings: "Up to 40%",
      routes: "Strategic"
    }
  },
};


type ServiceKey = keyof typeof services;

// ✅ Original FAQ data
const faqs = [
  {
    q: "Do you handle Less than Container Load (LCL) shipments?",
    a: "No — we only handle Full Container Load (FCL) shipments. This ensures faster handling, reduced risk, and secure delivery of goods.",
  },
  {
    q: "How long does shipping usually take?",
    a: "Transit times depend on the origin and destination. On average, sea freight to Mombasa takes 25–40 days depending on the port of loading, while inland delivery across East Africa can take an additional 2–7 days.",
  },
  {
    q: "Can you arrange cargo insurance?",
    a: "Yes, we assist clients in arranging cargo insurance to protect goods against risks such as loss, theft, or damage during transit.",
  },
  {
    q: "Which countries do you serve?",
    a: "We serve Kenya, Uganda, DRC, Somalia, and South Sudan, offering seamless customs clearance and freight forwarding across East Africa.",
  },
];

const ServicesDetails = () => {
  const { id } = useParams<{ id: ServiceKey }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = id && services[id] ? services[id] : services["customs"];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${service.title} | Pamu Services`}
        description={service.description}
        keywords={`${service.title}, logistics Kenya, freight forwarding East Africa, customs clearance, transport services, supply chain partner`}
        url={`https://pamuservices.co.ke/services/${id}`}
        image={logo}
      />

     <Hero/>

      {/* Content */}
      <section className="py-8 md:py-16 w-full px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Services Bar */}
          <div className="lg:hidden mb-6">
            <h2 className="text-lg font-semibold mb-3">Our Services</h2>
            <div className="bg-white shadow rounded-lg p-3">
              <div className="flex flex-wrap gap-2">
                {(Object.keys(services) as ServiceKey[]).map((key) => (
                  <Link
                    key={key}
                    to={`/services/${key}`}
                    className={`px-3 py-1.5 rounded-md transition text-xs whitespace-nowrap ${
                      id === key
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {services[key].title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block bg-white shadow rounded-lg p-4 lg:col-span-1 h-fit">
              <h2 className="text-lg font-semibold mb-4">Our Services</h2>
              <ul className="space-y-2">
                {(Object.keys(services) as ServiceKey[]).map((key) => (
                  <li key={key}>
                    <Link
                      to={`/services/${key}`}
                      className={`block w-full px-3 py-2 rounded-md transition text-sm ${
                        id === key
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {services[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow mb-6 md:mb-8"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{service.title}</h2>
            <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed">{service.description}</p>
            
            {/* Key Stats */}
            {service.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {'clearanceTime' in service.stats ? service.stats.clearanceTime : service.stats.transitTime}
                  </div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{service.stats.successRate}</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{service.stats.costSavings}</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {'countries' in service.stats ? service.stats.countries : service.stats.routes}
                  </div>
                  <div className="text-sm text-gray-600">
                    {'countries' in service.stats ? 'Countries' : 'Routes'}
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What We Offer</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            {service.benefits && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Steps */}
            {service.process && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* FAQ */}
            <div className="mt-8 md:mt-16">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border rounded-lg bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex justify-between items-center w-full px-3 md:px-4 py-3 text-left font-medium text-gray-800 text-sm md:text-base"
                    >
                      <span className="text-left pr-2">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-3 md:px-4 pb-4 text-gray-600 text-sm md:text-base">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
