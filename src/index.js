import App from "./app/App";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
