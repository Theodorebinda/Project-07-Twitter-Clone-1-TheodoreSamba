import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/sidebar.jsx";
import Trends from "./pages/trends.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
