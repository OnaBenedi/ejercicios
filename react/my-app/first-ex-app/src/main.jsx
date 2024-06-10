import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./main.css"

createRoot(document.getElementById("root")).render(<StrictMode>
    <App />
</StrictMode>);
