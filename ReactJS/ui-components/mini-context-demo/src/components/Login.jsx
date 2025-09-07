import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="border w-80 mx-auto mt-5 rounded-xl">
      <div className="bg-orange-200 flex p-2 flex-col rounded-xl justify-center items-center text-xl gap-3">
        <h2 className="font-bold text-indigo-400 mt-2">Login</h2>
        <input
          type="text"
          value={username}
          className="border focus:outline-none p-2 bg-gray-100 font-normal rounded-sm"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />{" "}
        <input
          type="password"
          className="border focus:outline-none p-2 bg-gray-100 font-normal rounded-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="mt-2 bg-emerald-400 px-6 text-gray-800 py-2 text-lg rounded-sm mb-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
