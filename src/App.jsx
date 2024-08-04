import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import WorksPage from "./pages/Works.jsx";
import ContactPage from "./pages/Contact.jsx";

import AmbienceOfLightPage from "./pages/design/AmbienceOfLight.jsx";
import BeautyOfTimePassingPage from "./pages/design/BeautyOfTimePassing.jsx";
import InterventionInOurDisconnectionPage from "./pages/design/InterventionInOurDisconnection.jsx";
import MasuTypoPage from "./pages/design/MasuTypo.jsx";
import ComfortingDinnerPage from "./pages/design/ComfortingDinner.jsx";
import ThreeDVisualsPage from "./pages/design/ThreeDVisuals.jsx";

import ObjectRotterdam2024Page from "./pages/webDev/ObjectRotterdam2024.jsx";
import WeatherCerealPage from "./pages/webDev/WeatherCereal.jsx";
import DonutsUniversePage from "./pages/webDev/DonutsUniverse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "works", element: <WorksPage /> },
      { path: "contact", element: <ContactPage /> },

      { path: "ambience-of-light", element: <AmbienceOfLightPage /> },
      { path: "beauty-of-time-passing", element: <BeautyOfTimePassingPage /> },
      {
        path: "intervention-in-our-disconnection",
        element: <InterventionInOurDisconnectionPage />,
      },
      { path: "masu-typo", element: <MasuTypoPage /> },
      { path: "comforting-dinner", element: <ComfortingDinnerPage /> },
      { path: "three-d-visuals", element: <ThreeDVisualsPage /> },

      { path: "object-rotterdam-2024", element: <ObjectRotterdam2024Page /> },
      { path: "weather-cereal", element: <WeatherCerealPage /> },
      { path: "donuts-universe", element: <DonutsUniversePage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
