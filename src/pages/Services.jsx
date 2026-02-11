import React from "react";

const services = [
  {
    name: "Air Freight",
    description: "Fast and secure air cargo solutions for urgent international shipments.",
    price: "Starting from Rs.4500/kg",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ocean Freight",
    description: "Cost-effective sea freight services for large and bulk cargo worldwide.",
    price: "Starting from Rs.2500/kg",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Land Transport",
    description: "Reliable inland transportation with full container and truckload options.",
    price: "Starting from Rs.1500/km",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",


  },
  {
    name: "Express Courier",
    description: "Doorstep express courier delivery for documents and parcels.",
    price: "Starting from Rs.3500/kg",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Warehousing",
    description: "Secure storage facilities with inventory management solutions.",
    price: "Starting from Rs.2000/day",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Door-to-Door Delivery",
    description: "End-to-end logistics from pickup to final delivery.",
    price: "Starting from Rs.5000",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",

  },
];

const Services = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Our Shipping Services
          </h2>
          <p className="mt-3 text-white">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {service.description}
                </p>

                <p className="mt-4 text-blue-600 font-semibold">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
