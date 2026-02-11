import React from "react";
import {
  MapPin,
  Warehouse,
  ShieldCheck,
  Clock
} from "lucide-react";

const features = [
  {
    title: "Real-time Tracking",
    description:
      "Track your shipment status with live updates using our smart tracking system.",
    icon: MapPin,
  },
  {
    title: "Global Warehousing",
    description:
      "Access secure warehousing facilities across multiple international locations.",
    icon: Warehouse,
  },
  {
    title: "Secure Packaging",
    description:
      "Professional packing solutions ensuring maximum cargo safety.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Custom Clearance Support",
    description:
      "Round-the-clock expert support for smooth customs clearance.",
    icon: Clock,
  },
];

const Features = () => {
  return (
    <section className="bg-white text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold">
            Operational Features
          </h2>
          <p className="mt-3 text-black">
            Technology-driven logistics with global operational excellence
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>

                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
