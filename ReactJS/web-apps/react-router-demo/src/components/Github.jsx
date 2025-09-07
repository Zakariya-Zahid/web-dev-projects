import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/zakariya-zahid`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <section className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl p-6 sm:p-10 bg-gray-800 shadow-lg text-white">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          Github
        </h1>

        {/* Avatar */}
        <div className="flex justify-center items-center">
          <img
            className="w-32 sm:w-40 md:w-56 rounded-2xl mb-4"
            src={data.avatar_url}
            alt="Profile"
          />
        </div>

        {/* Profile Link */}
        <div className="flex justify-center">
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-sm sm:text-lg break-all hover:underline mb-6 bg-black px-3 py-1 rounded-lg"
          >
            {data.html_url}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition">
            <h3 className="text-base sm:text-lg font-semibold">Repos</h3>
            <p className="text-xl sm:text-2xl font-bold mt-2">
              {data.public_repos}
            </p>
          </div>

          <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition">
            <h3 className="text-base sm:text-lg font-semibold">Followers</h3>
            <p className="text-xl sm:text-2xl font-bold mt-2">
              {data.followers}
            </p>
          </div>

          <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition">
            <h3 className="text-base sm:text-lg font-semibold">Following</h3>
            <p className="text-xl sm:text-2xl font-bold mt-2">
              {data.following}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/zakariya-zahid`);
  return response.json();
};
