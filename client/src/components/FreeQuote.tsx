import React, { useState } from "react";
import "@/styles/Freequote.css";
import businessmanImage from "@/assets/images/bg_1.jpg";
import { submitQuote } from "@/api";

interface FreeQuoteProps {
  variant?: "home" | "modal" | "embedded";
  onClose?: () => void;
}

const FreeQuote = ({ variant = "home", onClose }: FreeQuoteProps) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    freightType: "",
    containerType: "",
    containerQty: 1,
    company: "",
    email: "",
    phone: "",
    specialRequirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "containerQty" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await submitQuote(formData);
      setSuccess(result.message || "Quote request sent successfully!");
      setFormData({
        from: "",
        to: "",
        freightType: "",
        containerType: "",
        containerQty: 1,
        company: "",
        email: "",
        phone: "",
        specialRequirements: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="quote-form space-y-2 w-full max-w-xs mx-auto">
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <select
          name="from"
          value={formData.from}
          onChange={handleInputChange}
          className="form-select flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        >
          <option value="">From</option>
          <option value="Kenya">Kenya</option>
          <option value="Somalia">Somalia</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Uganda">Uganda</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="DRC Congo">DRC Congo</option>
        </select>
        <select
          name="to"
          value={formData.to}
          onChange={handleInputChange}
          className="form-select flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        >
          <option value="">To</option>
          <option value="Kenya">Kenya</option>
          <option value="Somalia">Somalia</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Uganda">Uganda</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="DRC Congo">DRC Congo</option>
        </select>
      </div>

      <select
        name="freightType"
        value={formData.freightType}
        onChange={handleInputChange}
        className="form-select w-full p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        required
      >
        <option value="">Freight Type</option>
        <option value="ocean">Ocean / Sea Freight</option>
        <option value="air">Air Freight</option>
        <option value="rail">Rail Freight</option>
        <option value="land">Land Transport</option>
      </select>

      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <select
          name="containerType"
          value={formData.containerType}
          onChange={handleInputChange}
          className="form-select flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        >
          <option value="">Container Type</option>
          <option value="20ft">20ft</option>
          <option value="40ft">40ft</option>
          <option value="40ft-hc">40ft HC</option>
        </select>
        <input
          type="number"
          name="containerQty"
          value={formData.containerQty}
          onChange={handleInputChange}
          placeholder="Qty"
          min={1}
          className="form-input flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
      </div>

      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        placeholder="Company Name"
        className="form-input w-full p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        required
      />

      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form-input flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="form-input flex-1 p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        />
      </div>

      <textarea
        name="specialRequirements"
        value={formData.specialRequirements}
        onChange={handleInputChange}
        placeholder="Special requirements (hazmat, temperature, customs, etc.)"
        className="form-textarea w-full p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        rows={2}
      />

      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition text-xs font-medium"
        disabled={loading}
      >
        {loading ? "Sending..." : "SEND MESSAGE →"}
      </button>
    </form>
  );

  // ---------------- MODAL VERSION ----------------
  if (variant === "modal") {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end p-2 pb-0">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onClose) onClose();
              }}
              className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="pb-4">
            <div className="mb-2 text-center">
              <span className="block text-xs font-semibold text-red-600 uppercase">
                Request A
              </span>
              <h1 className="text-lg font-bold text-gray-900">Free Quote</h1>
            </div>
            {formContent}
          </div>
        </div>
      </div>
    );
  }

  // ---------------- EMBEDDED VERSION (for use inside other modals) ----------------
  if (variant === "embedded") {
    return (
      <div className="w-full">
        <div className="mb-2 text-center">
          <span className="block text-xs font-semibold text-red-600 uppercase">
            Request A
          </span>
          <h1 className="text-lg font-bold text-gray-900">Free Quote</h1>
        </div>
        {formContent}
      </div>
    );
  }

  // ---------------- HOMEPAGE VERSION ----------------
return (
  <section
    className="free-quote-section py-6 md:py-12 relative min-h-[350px] md:min-h-[400px]"
    style={{ backgroundImage: `url(${businessmanImage})` }}
  >
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="container relative z-10 flex justify-start">
      <div className="quote-form-box w-full max-w-sm bg-white p-4 md:p-5 rounded-lg shadow-lg">
        <div className="mb-2 text-left">
          <span className="block text-xs font-semibold text-black">Request A</span>
          <h1 className="text-lg md:text-xl font-bold text-red-600">Free Quote</h1>
        </div>
        {formContent}
      </div>
    </div>
  </section>
);
}

export default FreeQuote;
