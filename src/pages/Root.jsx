import { Outlet } from "react-router-dom";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function RootLayout() {
  return <>
        {/* <Header /> */}

        <Outlet />

        <Footer />
  </>;
}
