import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FallbackLoader from "./components/ui/FallbackLoader";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<FallbackLoader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
