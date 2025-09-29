import SEOHead from "@/components/SEOHead";
import AboutHero from "@/components/AboutHero";
import CompanyOverview from "@/components/CompanyOverview";
import ServiceMarquee from "@/components/ServicesMarquee";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import logo from "@/assets/images/logo_footer.png";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen">
      <SEOHead 
        title="About Us | Pamu Services"
        description="Discover the story of Pamu Services Limited, a leading logistics partner in East Africa. From licensed customs clearance to multimodal freight forwarding, we deliver seamless, cost-effective transport and supply chain solutions."
        keywords="About Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance, supply chain solutions, transport services"
        url="https://pamuservices.co.ke/about"
        image={logo}
      />
      
      {/* Hero Section */}
      <AboutHero />
      
      {/* Main Content */}
      <div className="space-y-0">
        {/* Company Overview */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50">
          <CompanyOverview />
        </section>
        
        {/* Services Marquee */}
        <section className="bg-white">
          <ServiceMarquee />
        </section>
        
        {/* How It Works */}
        <section className="bg-gradient-to-r from-blue-50 to-gray-50">
          <HowItWorks />
        </section>
        
        {/* Experience */}
        <section className="bg-gray-100">
          <Experience />
        </section>
      </div>
    </div>
  );
}
