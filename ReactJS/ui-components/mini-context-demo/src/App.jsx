import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h2 className="text-3xl font-bold flex justify-center items-center mt-2">
        Learning Context API
      </h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
