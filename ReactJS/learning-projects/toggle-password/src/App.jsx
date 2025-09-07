import React, { useState } from "react";

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : "password";
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">
            Password Visibility
          </h1>

          {/* Password Field + Toggle Button (dummy) */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={inputType} // stays 'password' (no logic yet)
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-11 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Eye icon button (dummy; no onClick) */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gray-500 hover:text-gray-700"
                title="Show/Hide password"
              >
                {/* Simple eye icon placeholder (ASCII) */}
                <span className="text-lg">👁️</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Click the eye to toggle visibility (UI only).
            </p>
          </div>

          {/* Submit (does nothing in UI-only version) */}
          <form action="submit">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
