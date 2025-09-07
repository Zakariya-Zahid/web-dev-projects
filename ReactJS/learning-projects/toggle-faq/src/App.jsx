import React, { useState } from "react";

const App = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">FAQ Section</h1>

        {/* Accordion Item 1 */}
        <div className="border rounded-lg shadow-sm">
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            className="w-full cursor-pointer flex justify-between items-center p-4 font-medium text-lg"
          >
            <span>What is React?</span>
            <span className="text-xl">{isOpen1 ? "-" : "+"}</span>
          </button>
          {isOpen1 && (
            <div className="p-4 border-t text-gray-600">
              React is a JavaScript library for building user interfaces.
            </div>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div className="border rounded-lg shadow-sm">
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className="w-full cursor-pointer flex justify-between items-center p-4 font-medium text-lg"
          >
            <span>How does useState work?</span>
            <span className="text-xl">{isOpen2 ? "-" : "+"}</span>
          </button>
          {isOpen2 && (
            <div className="p-4 border-t text-gray-600">
              The useState hook lets you add state to functional components.
            </div>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div className="border rounded-lg shadow-sm">
          <button
            onClick={() => setIsOpen3(!isOpen3)}
            className="w-full cursor-pointer flex justify-between items-center p-4 font-medium text-lg"
          >
            <span>What is an Accordion?</span>
            <span className="text-xl">{isOpen3 ? "-" : "+"}</span>
          </button>
          {isOpen3 && (
            <div className="p-4 border-t text-gray-600">
              An accordion is a list of items that can expand/collapse.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
