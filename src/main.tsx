import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/demo/App";
import "@/styles/globals.css";
import { TooltipProvider } from "@/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider delayDuration={300}>
        <App />
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>,
);
