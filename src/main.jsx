import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import Schedule from "./components/Schedule.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use ReactDOM.render to render the application with RouterProvider
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
