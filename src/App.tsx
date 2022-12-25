import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth, { Login, Register } from "./components/Auth";
import ErrorPage from "./components/ErrorPage";
import SiteLoader from "./loaders/SiteLoader";
import Site from "./components/Site";
import Checkin from "./components/Checkin";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="auth">
          <Route path="login" element={<Auth RightBody={<Login />} />} />
          <Route path="register" element={<Auth RightBody={<Register />} />} />
        </Route>
        <Route path="site/:siteId" loader={SiteLoader} element={<Site />} />
        <Route
          path="checkin/:siteId"
          loader={SiteLoader}
          element={<Checkin />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
