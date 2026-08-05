import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import Tasks from "../pages/dashboard/Tasks";
import Team from "../pages/dashboard/Team";
import Calendar from "../pages/dashboard/Calendar";
import Reports from "../pages/dashboard/Reports";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

import NotFound from "../pages/NotFound";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
