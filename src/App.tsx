import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppKitProvider } from "./config/AppKitProvider";
import HomePage from "./pages/home/HomePage";
import { MoonPayProvider } from "@moonpay/moonpay-react";

export default function App() {
  const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);
  return (
    <div className=" ">
      <AppKitProvider>
        <MoonPayProvider
          apiKey={import.meta.env.VITE_MOONPAY_KEY}
          // debug
        >
          <RouterProvider router={router} />
        </MoonPayProvider>
      </AppKitProvider>
    </div>
  );
}
