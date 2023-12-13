import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/css/main.css";
import Blog from './Pages/Blog';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/sign",
    element: <SignUp/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
