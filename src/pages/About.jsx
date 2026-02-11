import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT – TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            About Our Logistics
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With over a decade of experience in the logistics and cargo industry,
            <span className="font-semibold text-gray-800"> CargoCo </span>
            has built a strong reputation for reliable and timely delivery solutions.
            Our extensive global network and advanced logistics infrastructure allow
            us to handle shipments of all sizes with precision and care.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our fleet consists of modern cargo aircraft, ocean vessels, and land
            transport vehicles, supported by strategically located warehouses
            worldwide. We are committed to operational excellence, secure handling,
            and delivering every shipment on schedule.
          </p>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">15+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">120+</h3>
              <p className="text-sm text-gray-500">Fleet Vehicles</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">40+</h3>
              <p className="text-sm text-gray-500">Global Warehouses</p>
            </div>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
            alt="Logistics Warehouse"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
