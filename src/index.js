import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextLayout from "./context/theme-context"
import RouterDefault from "./Router/route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextLayout>
    <React.StrictMode>
      {/* <App /> */}
      <RouterDefault/>
    </React.StrictMode>
  </ThemeContextLayout>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
