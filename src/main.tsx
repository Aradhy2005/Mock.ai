import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { ToasterProvider } from "./provider/toast-provider.tsx";
import React from "react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const isDev = import.meta.env.DEV;

const RootComponent = (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
    <ToasterProvider />
  </ClerkProvider>
);

createRoot(document.getElementById("root")!).render(
  isDev ? <React.StrictMode>{RootComponent}</React.StrictMode> : RootComponent
);
