
import ReactDOM from "react-dom/client";

import "./index.css";
import React from "react";
import ThemeProvider from "./Contexts/ThemeProvider/ThemeProvider.jsx";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
