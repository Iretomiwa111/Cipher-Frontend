import { createBrowserRouter } from "react-router-dom";


import Home from "./Pages/(LandingPages)/Home";
import Contact from "./Pages/(LandingPages)/Contact";
import Services from "./Pages/(LandingPages)/Services";
import LandingPageRoot from "./Pages/(LandingPages)/LandingPageRoot";


export const router = createBrowserRouter([
    {
    path: "/",
    element: <LandingPageRoot/>,
    children: [
      { index: true, element: <Home /> },        
      { path: "contact", element: <Contact /> },  
      { path: "services", element: <Services /> }, 
    ],  
  },

]);