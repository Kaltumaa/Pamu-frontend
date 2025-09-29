import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/images/logo_footer.png"; // ✅ update with your actual logo path

const FooterWithLogo: React.FC = () => {
  return (
    <footer className="w-full bg-white py-6">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-4 gap-x-8 text-center md:text-left">
        {/* ✅ Logo + Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* ✅ Logo */}
          <img src={logo} alt="Pamu Services Logo" className="w-10" />

          {/* ✅ Navigation Links */}
          <ul className="flex flex-wrap items-center gap-x-6 text-sm">
            <li>
              <a
                href="/about"
                className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-normal text-gray-700 transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Social Icons */}
        <div className="flex items-center gap-4 text-gray-900">
          <a href="#" className="hover:text-[#0C6088]">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaXTwitter className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#0C6088]">
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ✅ Divider */}
      <hr className="my-4 border-gray-200" />

      {/* ✅ Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        {/* Copyright */}
        <p className="text-center md:text-left text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Pamu Services Limited. All rights reserved.
        </p>

        {/* ✅ Contact Info (from ) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
          {/* Email */}
          <a
            href="mailto:info@pamuservices.co.ke"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <Mail size={16} className="text-[#0C6088]" />
            <span>info@pamuservices.co.ke</span>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps?q=Mombasa+Trade+Center,+5th+Floor,+Nkrumah+Road,+Mombasa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <MapPin size={16} className="text-[#0C6088]" />
            <span>Mombasa Trade Center, 5th Floor, Nkrumah Road</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+254758002383"
            className="flex items-center gap-2 text-gray-900 hover:text-[#0C6088]"
          >
            <Phone size={16} className="text-[#0C6088]" />
            <span>+254 758 002 383</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithLogo;