import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";

/**
 * App root component
 * Contains router provider for page navigation
 */
export default function App() {
  return <RouterProvider router={router} />;
}
