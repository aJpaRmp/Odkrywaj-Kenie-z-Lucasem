import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(<App />);