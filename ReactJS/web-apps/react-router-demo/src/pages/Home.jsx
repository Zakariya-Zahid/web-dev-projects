import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 md:py-20 px-6  shadow-lg mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to{" "}
            <span className="underline decoration-yellow-300">MyWebsite</span>
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            A simple React + Tailwind starter project with routing, components,
            and clean UI.
          </p>
          <NavLink
            to="/about"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Get Started
          </NavLink>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            About This Project
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            This is the home page of your React app. You can navigate between
            different pages using React Router. TailwindCSS makes it easy to
            style and keep things responsive without writing custom CSS.
          </p>
        </section>

        {/* Features / Cards Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                ⚡ Fast Development
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Quickly build responsive UIs with Tailwind’s utility-first
                classes.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                🎨 Clean Design
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Minimal and modern look out-of-the-box, no heavy CSS required.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                🌍 Routing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Navigate smoothly across pages with React Router integration.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
