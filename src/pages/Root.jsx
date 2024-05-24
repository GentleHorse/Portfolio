import { Outlet } from "react-router-dom";

import Header from "../components/header/Header.jsx";

export default function RootLayout() {
  return <>
        <Header />

        <Outlet />
  </>;
}
