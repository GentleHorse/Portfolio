import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import WorksPage from "./pages/Works.jsx";
import ContactPage from "./pages/Contact.jsx";

import ThreeDVisualsPage from "./pages/ThreeDVisuals.jsx";
import AmbienceOfLightPage from "./pages/designProjects/AmbienceOfLight.jsx";
import BeautyOfTimePassingPage from "./pages/designProjects/BeautyOfTimePassing.jsx";
import InterventionInOurDisconnectionPage from "./pages/designProjects/InterventionInOurDisconnection.jsx";
import LivingTypographyPage from "./pages/designProjects/LivingTypography.jsx";
import ComfortingDinnerPage from "./pages/designProjects/ComfortingDinner.jsx";


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
      { path: "living-typography", element: <LivingTypographyPage /> },
      { path: "comforting-dinner", element: <ComfortingDinnerPage /> },
      { path: "three-d-visuals", element: <ThreeDVisualsPage /> },
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
