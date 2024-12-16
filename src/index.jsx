import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import ServicePR from "./pages/service/Service";
import Rankings from "./pages/rankings/Rankings";
import Wallet from "./pages/wallet/Wallet";
import Login from "./pages/login/Login";
import ServiceDetail from "./pages/service/ServiceDetail";
import TreatM from "./pages/treatment/TreatMent";
import Girl_Detail from "./pages/member/Member";
import ScrollToTop from "./components/Scroll/Scroll";
import "./styles/index.css";

// Tạo router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App là nơi chứa Header, Outlet và Footer
    children: [
      { index: true, element: <Home /> },
      { path: "/service", element: <ServicePR /> },
      { path: "/rankings", element: <Rankings /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/login", element: <Login /> },
      { path: "/service/:id", element: <ServiceDetail /> },

      { path: "/treat/:id", element: <TreatM /> },
      { path: "/girl/:id", element: <Girl_Detail /> },
    ],
  },
]);

// Render ứng dụng với RouterProvider và ScrollToTop
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
