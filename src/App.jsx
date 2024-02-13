import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/Profile.jsx";
// import { Outlet } from "react-router-dom";

import("./style/reset.css");
import("./style/App.css");
import("./style/index.css");

export default function App() {
  return (
    <Layout>
      <Home />
      <Profil />
    </Layout>
  );
}
