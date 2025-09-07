import React from "react";

const Contact = () => {
  return (
    <section className="p-6 bg-white rounded-xl shadow-md mb-16">
      <h2 className="text-xl font-semibold text-slate-800">Contact Page</h2>
      <p className="text-slate-600 mt-2">
        Email us at:{" "}
        <a
          href="mailto:hello@example.com"
          className="font-semibold text-blue-600 hover:underline"
        >
          hello@example.com
        </a>
      </p>

      {/* Optional Contact Form */}
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
