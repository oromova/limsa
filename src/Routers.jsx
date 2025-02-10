import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./Pages/Home/Home";
import { Services } from "./Pages/Services/Services";
import { Prices } from "./Pages/Prices/Prices";
import { Works } from "./Pages/Works/Works";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/works",
        element: <Works/>
      },
      {
        path: "/prices",
        element: <Prices/>
      },
    ]
  }
])