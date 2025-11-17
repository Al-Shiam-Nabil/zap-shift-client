import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Covereges from "../Pages/Coverages/Covereges";
import AuthLayout from "../Layouts/AuthLayout";
import LoginPage from "../Pages/Auth/Login/LoginPage";
import { Component } from "react";
import RegisterPage from "../Pages/Auth/Register/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import BeARider from "../Pages/BeARider/BeARider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "coverage",
        Component: Covereges,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
        hydrateFallbackElement: <h3>Loading...</h3>,
      },
      {
        path:'be-a-rider',
        element:<PrivateRoutes><BeARider></BeARider></PrivateRoutes>
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);
