import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
            {userid.charAt(0).toUpperCase()}
          </div>

          {/* Username */}
          <h1 className="text-2xl font-semibold text-gray-800">User Profile</h1>
          <p className="text-lg text-gray-600">
            Username:{" "}
            <span className="font-medium text-indigo-600">{userid}</span>
          </p>

          {/* Stats (example) */}
          <div className="grid grid-cols-3 gap-4 w-full mt-4">
            <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Posts</h3>
              <p className="text-lg font-bold text-gray-800">23</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Followers</h3>
              <p className="text-lg font-bold text-gray-800">120</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Following</h3>
              <p className="text-lg font-bold text-gray-800">75</p>
            </div>
          </div>

          {/* Action Button */}
          <button className="mt-6 px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
