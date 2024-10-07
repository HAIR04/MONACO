import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Marketplace from "./pages/marketplace/MarketPlace.jsx";
import Rankings from "./pages/rankings/Rankings.jsx";
import Wallet from "./pages/wallet/Wallet.jsx";
import Login from "./pages/login/Login.jsx";
import "./styles/index.css";
const router = createBrowserRouter([
  {
    //Tất cả nằm trong này sẽ được kế thừa những thứ dùng chung như header , footer
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/rankings",
        element: <Rankings />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path : '/login',
        element :<Login/>
      }
    ],
  },
  //năm ngoài phạm vi này sé không thừa hưởng thứ gì
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
