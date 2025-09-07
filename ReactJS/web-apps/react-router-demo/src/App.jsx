import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Show all pages just for now (you will replace this with routes later) */}
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
