import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 ">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="mt-3 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
