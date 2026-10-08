import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAnalytics, initGlobalClickTracking } from "./lib/analytics";

initAnalytics();
initGlobalClickTracking();

createRoot(document.getElementById("root")!).render(<App />);
