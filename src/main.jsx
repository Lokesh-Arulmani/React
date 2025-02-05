import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you are using the correct import
import App from "./App.jsx"; // Make sure the App component is correctly imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
