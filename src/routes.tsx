import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./pages/app/dashboard";
import { AppLayout } from "./pages/_layout/app";
import { LoginLayout } from "./pages/_layout/login";
import { ForgotPassword } from "./pages/auth/forgot-password";
import { WaterTank } from "./pages/app/watertank";
import { NotFound } from "./not-found";
import { LandingPage } from "./pages/app";
import { WaterTankLayout } from "./pages/_layout/waterTank";
import PrivateRoute from "./private-route";
import { Login } from "./pages/auth/login.";
import { fetchData } from "./api";
import { ManagerDashboard } from "./pages/app/users/admin/manager-dashboard";
import { AdminProfile } from "./pages/app/users/admin/profile";
import { Hidrometer } from "./pages/app/entity/hidrometer";
import { WaterTankLevel } from "./pages/app/entity/water-tank-level";
import { ArtesianWell } from "./pages/app/entity/artesian-well";
import { AdminAppLayout } from "./pages/_layout/admin";
const { waterTanks, artesianWell, hidrometers } = fetchData();

export interface useLoaderDataProps {
  hidrometers?: Hidrometer[];
  waterTanks?: WaterTankLevel[];
  artesianWell?: ArtesianWell[];
}

async function loader(): Promise<useLoaderDataProps> {
  return { waterTanks, artesianWell, hidrometers };
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        loader: loader,
        element: <PrivateRoute element={<DashBoard />} />,
      },
      {},
    ],
  },
  {
    element: <AdminAppLayout />,
    path: "/dashboard/admin",

    children: [
      {
        path: "/dashboard/admin",
        loader: loader,
        element: <PrivateRoute element={<ManagerDashboard />} />,
      },
    ],
  },
  {
    element: <WaterTankLayout />,
    children: [
      {
        path: "/dashboard/:waterTankId",
        element: <PrivateRoute element={<WaterTank />} />,
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
