import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="auth">
          <Route
            path="login"
            element={<AuthenticationPage LoginAndRegisterView={<Login />} />}
          />
          <Route
            path="register"
            element={<AuthenticationPage LoginAndRegisterView={<Register />} />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
