import { AppKitProvider } from "./config/AppKitProvider";
import HomePage from "./pages/home/HomePage";

export default function App() {
  return (
    <div className=" ">
      <AppKitProvider>
        <HomePage />
      </AppKitProvider>
    </div>
  );
}
