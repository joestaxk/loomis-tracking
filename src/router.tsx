import { createBrowserRouter } from "react-router-dom";
import LayoutDefault from "./layout/default";
import App from "./App";
// import Track from "./pages/track";
import PrivacyPolicy from "./pages/privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />, // Render LayoutDefault at the root path
    children: [
      {
        path: "/",   // This matches the root path
        element: <App />, // Render App as a child of LayoutDefault
      },
      {
        path: "/track",   // This matches the root path
        // element: <Track />, // Render App as a child of LayoutDefault
        element: <App />, // Render App as a child of LayoutDefault
      },
      {
        path: "/privacy-policy",   // This matches the root path
        element: <PrivacyPolicy />// Render App as a child of LayoutDefault
      }
    ],
  }
]);

export default router;