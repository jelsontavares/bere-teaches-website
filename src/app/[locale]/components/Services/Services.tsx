"use client";

import React, { useEffect, useState } from "react";

// Define the service type interface
interface ServiceItem {
  name: string;
  details: string;
}

interface Service {
  title: string;
  items: ServiceItem[];
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [hoveredItem, setHoveredItem] = useState<ServiceItem | null>(null);

  // Fetch services data from JSON file
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services data:", error));
  }, []);

  return (
    <section id="services" className="w-full max-w-full mx-auto bg-white px-6 py-24 md:px-8 md:py-32 text-black">
      <div className="w-full mx-auto flex flex-col gap-14">
        {/* Title and Subtitle */}
        <div className="max-w-3xl mx-auto text-left md:text-center flex flex-col gap-6">
          <h2 className="text-5xl font-bold text-black">
            Explore Our Services
          </h2>
          <p className="text-xl text-black">
            From beginner to advanced levels, we offer a variety of courses tailored to your learning needs.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6 relative">
              <h3 className="text-xl font-semibold mb-4 text-black">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-black relative"
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    {hoveredItem === item && (
                      <div className="absolute z-10 -top-2 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded shadow-md text-sm whitespace-nowrap">
                        {item.details}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
