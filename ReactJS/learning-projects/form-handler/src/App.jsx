import React from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const [submittedUser, setSubmittedUser] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUser(user);
    setSubmittedEmail(email);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Basic Form Handler
          </h1>

          {/* Form Section */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={user}
                required
                onChange={(e) => setUser(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>

          {/* Submitted Data Display (dummy placeholder) */}
          <div className="mt-6 p-4 border-t border-gray-200">
            <h2 className="font-semibold mb-2">Submitted Data:</h2>
            <p>
              <span className="font-medium">Username:</span> {submittedUser}
            </p>
            <p>
              <span className="font-medium">Email:</span> {submittedEmail}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
