import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const message = `Hi, I'm ${name}. I want to ship ${service} of ${quantity}.`;
    const phoneNumber = "947XXXXXXXX"; // <-- replace with real number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT – CONTACT DETAILS + MAP */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Contact & Quote Request
          </h2>

          <p className="mt-4 text-white">
            Get in touch with our logistics experts for fast and reliable cargo
            solutions.
          </p>

          {/* DETAILS */}
          <div className="mt-6 space-y-3 text-white">
            <p><strong>Address:</strong> No. 45, Logistics Park, Colombo, Sri Lanka</p>
            <p><strong>Email:</strong> info@cargoco.lk</p>
            <p><strong>Phone:</strong> +94 7X XXX XXXX</p>
          </div>

          {/* MAP */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps?q=colombo%20port&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT – WHATSAPP FORM */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Request a Quote via WhatsApp
          </h3>

          <form onSubmit={handleWhatsApp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Package Type / Service
              </label>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a service</option>
                <option>Air Freight</option>
                <option>Ocean Freight</option>
                <option>Land Transport</option>
                <option>Express Courier</option>
                <option>Warehousing</option>
                <option>Door-to-Door Delivery</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight / Quantity
              </label>
              <input
                type="text"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 w-full rounded-md border-black p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. 10kg / 3 boxes"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
