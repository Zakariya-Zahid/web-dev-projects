import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-11">About Us</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Learn more about what drives our mission and the values behind this
          project.
        </p>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>
          Welcome to{" "}
          <span className="font-semibold text-slate-800">MyWebsite</span>! This
          project is powered by{" "}
          <span className="text-indigo-600 font-medium">React</span> and{" "}
          <span className="text-teal-600 font-medium">TailwindCSS</span>,
          crafted with a focus on performance, scalability, and simplicity.
        </p>

        <p>
          Our goal is to provide a clean and modern foundation for building web
          applications that are both developer-friendly and user-focused.
          Whether you're just starting out or an experienced developer, this
          setup ensures you can scale quickly without compromising design or
          usability.
        </p>

        <p>
          Beyond just code, we believe in creating intuitive experiences that
          empower creativity and problem-solving. This project reflects our
          commitment to modern web development practices and user-first design.
        </p>
      </div>
    </section>
  );
};

export default About;
