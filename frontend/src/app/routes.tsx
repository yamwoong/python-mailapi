import { createBrowserRouter } from "react-router-dom";
import HealthDashboard from "../pages/HealthDashboard";

/**
 * App router definition
 * Shows HealthDashboard on root path "/"
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HealthDashboard />,
  },
]);
