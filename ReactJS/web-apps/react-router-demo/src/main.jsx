import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import User from "./components/User.jsx";
import Github, { githubInfoLoader } from "./components/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route
        path="user"
        element={
          <div className="flex justify-center items-center mt-21 mb-[50vh]">
            <div className="bg-gray-900 text-red-300 px-8 py-4 rounded-xl shadow-lg max-w-md text-center">
              <p className="text-lg font-medium">
                Provide username as{" "}
                <span className="font-semibold text-red-400">
                  users/yourname
                </span>
              </p>
            </div>
          </div>
        }
      />

      <Route path="user/:userid" element={<User />}></Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
