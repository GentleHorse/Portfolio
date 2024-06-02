import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import RootLayout from "./pages/Root.jsx";
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
      { path: "ambience-of-light", element: <AmbienceOfLightPage /> },
      { path: "beauty-of-time-passing", element: <BeautyOfTimePassingPage /> },
      {
        path: "intervention-in-our-disconnection",
        element: <InterventionInOurDisconnectionPage />,
      },
      { path: "living-typography", element: <LivingTypographyPage /> },
      {},
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
