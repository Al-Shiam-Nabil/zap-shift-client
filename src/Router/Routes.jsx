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
import AddParcelPage from "../Pages/AddParcel/AddParcelPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcelsPage from "../Pages/Dashboard/MyParcelsPage";
import PaymentPage from "../Pages/Payment/PaymentPage";
import PaymentSuccessPage from "../Pages/Dashboard/payment/PaymentSuccessPage";
import PaymentCancelPage from "../Pages/Dashboard/payment/PaymentCancelPage";
import PaymentHistoryPage from "../Pages/Dashboard/payment/PaymentHistoryPage";
import ApproveRider from "../Pages/Dashboard/Riider/ApproveRider";
import UsersManagementPage from "../Pages/Dashboard/UsersManagement/UsersManagementPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
      hydrateFallbackElement: <h3>Loading...</h3>,
    children: [
      { index: true, Component: HomePage },
      {
        path: "coverage",
        Component: Covereges,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      
      },
      {
        path:'rider',
        element:<PrivateRoutes><BeARider></BeARider></PrivateRoutes>,
        loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
      },
      {
        path:'add-parcel',
        element:<PrivateRoutes><AddParcelPage></AddParcelPage></PrivateRoutes>,
        loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
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
  {
    path:'dashboard',
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children:[
      {
        path:'my-parcels',
        Component:MyParcelsPage
      },
      {
        path:"payment/:parcelId",
        Component:PaymentPage
      },
      {
        path:'payment-success',
        Component:PaymentSuccessPage
      },
      {
        path:'payment-cancel',
        Component:PaymentCancelPage
      },
      {
        path:"payment-history",
        Component:PaymentHistoryPage
      },{
        path:'approve-rider',
        Component:ApproveRider
      },{
        path:"users-management",
        Component:UsersManagementPage
      }
    ]
  }
]);
