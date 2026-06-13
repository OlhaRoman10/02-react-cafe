import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import Alert from "./components/Alert";
import "modern-normalize";
import "./global.css";
// import Icon from "./components/Icon";




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Alert message="This is a default alert without type!" />
    <Alert type="success" message="This is a success alert!" />
    <Alert type="error" message="This is an error alert!" />
    
  </React.StrictMode>
);


