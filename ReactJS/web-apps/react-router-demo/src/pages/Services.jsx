import React from "react";
import { Code, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable, and high-performance websites built with the latest technologies like React, Next.js, and Node.js.",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with smooth UI/UX, fast performance, and seamless integration with APIs.",
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing designs focused on creating the best user experiences.",
    icon: <Palette className="w-8 h-8 text-pink-600" />,
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-11">
        <h2 className="text-3xl font-bold text-slate-800">Our Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          We provide a wide range of digital solutions tailored to help you
          build, grow, and scale your business efficiently.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
