import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import GiveKudos from "./pages/GiveKudos";
import Analytics from "./pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/give-kudos",
    element: <GiveKudos />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
