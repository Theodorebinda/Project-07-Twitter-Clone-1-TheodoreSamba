import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/layout';
import Home from './pages/home';
import Profil from './pages/Profile';
import InConstruction from './pages/InConstruction';
import ProfileFollowers from './components/Profile/ProfileFollowers';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/profil",
        element: <Profil />, 
      },
      {
        path:"/profil/:username",
        element: <ProfileFollowers />, 
      },
      {
        path:"/explore",
        element:<InConstruction />
      },
      {
        path:"/notification",
        element:<InConstruction />
      },
      {
        path:"/message",
        element:<InConstruction />
      },
      {
        path:"/bookmark",
        element:<InConstruction />
      },
      {
        path:"/liste",
        element:<InConstruction />
      },
      {
        path:"/more",
        element:<InConstruction />
      },

  ],
     
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
