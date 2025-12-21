import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-MQPEX73RXJ")
createRoot(document.getElementById("root")!).render(<App />);
