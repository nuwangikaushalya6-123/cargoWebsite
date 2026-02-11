import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Global Logistics <br />
            <span className="text-blue-500">Simplified</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Reliable cargo & shipping solutions connecting businesses worldwide.
          </p>

          <a
            href="https://wa.me/947XXXXXXXX?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20cargo%20services"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Inquire via WhatsApp
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80"
            alt="Cargo Ship"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
