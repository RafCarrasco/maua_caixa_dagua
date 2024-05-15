import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./pages/app/dashboard";
import { AppLayout } from "./pages/_layout/app";
import { LoginLayout } from "./pages/_layout/login";
import { Login } from "./pages/auth/login.";
import { ForgotPassword } from "./pages/auth/forgot-password";
import { WaterTank } from "./pages/app/watertank";
import { NotFound } from "./not-found";
import { LandingPage } from "./pages/app";
import { WaterTankLayout } from "./pages/_layout/waterTank";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    element: <WaterTankLayout />,
    children: [
      {
        path: "/dashboard/:waterTankLevel",
        element: <WaterTank />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
