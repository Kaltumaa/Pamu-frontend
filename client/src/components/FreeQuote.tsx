import React, { useState } from "react";
import "@/styles/Freequote.css";
import businessmanImage from "@/assets/images/bg_1.jpg";
import { submitQuote } from "@/api";

const FreeQuote = ({ variant = "home", showQuote }) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      console.log("Response:", result);
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
      console.error("Error:", err);
      setError(err.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="quote-form space-y-3">
      {/* Origin & Destination */}
      <div className="flex space-x-3">
        <select
          name="from"
          value={formData.from}
          onChange={handleInputChange}
          className="form-select w-1/2"
          required
        >
          <option value="">From: </option>
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
          className="form-select w-1/2"
          required
        >
          <option value="">To: </option>
          <option value="Kenya">Kenya</option>
          <option value="Somalia">Somalia</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Uganda">Uganda</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="DRC Congo">DRC Congo</option>
        </select>
      </div>

      {/* Freight Type */}
      <select
        name="freightType"
        value={formData.freightType}
        onChange={handleInputChange}
        className="form-select w-full"
        required
      >
        <option value="">Freight Type</option>
        <option value="ocean">Ocean / Sea Freight</option>
        <option value="air">Air Freight</option>
        <option value="rail">Rail Freight</option>
        <option value="land">Land Transport</option>
      </select>

      {/* Container Type & Quantity */}
      <div className="flex space-x-3">
        <select
          name="containerType"
          value={formData.containerType}
          onChange={handleInputChange}
          className="form-select w-1/2"
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
          className="form-input w-1/2"
        />
      </div>

      {/* Company */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        placeholder="Company Name"
        className="form-input w-full"
        required
      />

      {/* Contact Info */}
      <div className="flex space-x-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form-input w-1/2"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="form-input w-1/2"
          required
        />
      </div>

      {/* Special Requirements */}
      <textarea
        name="specialRequirements"
        value={formData.specialRequirements}
        onChange={handleInputChange}
        placeholder="Special requirements (hazmat, temperature, customs, etc.)"
        className="form-textarea w-full"
        rows={3}
      />

      {/* Feedback */}
      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
        disabled={loading}
      >
        {loading ? "Sending..." : "SEND MESSAGE →"}
      </button>
    </form>
  );

  // ---------------- MODAL VERSION ----------------
  if (variant === "modal") {
    return (
      <div className="flex w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="hidden md:block w-1/2">
          <img
            src={businessmanImage}
            alt="Business"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-6 text-left">
            <span className="block text-sm font-semibold text-red-600 uppercase">
              Request A
            </span>
            <h1 className="text-3xl font-bold text-gray-900">Free Quote</h1>
          </div>
          <div className="flex-grow">{formContent}</div>
        </div>
      </div>
    );
  }

  // ---------------- HOMEPAGE VERSION ----------------
  return (
    <section
      className="free-quote-section py-16"
      style={{ backgroundImage: `url(${businessmanImage})` }}
    >
      <div className="container">
        <div className="quote-form-box max-w-xl bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4 text-left">
            <span className="block text-sm font-semibold text-black">
              Request A
            </span>
            <h1 className="text-2xl font-bold text-red-600">Free Quote</h1>
          </div>
          {formContent}
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
