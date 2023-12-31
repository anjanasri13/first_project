import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./pages/App1";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import Example from "./pages/main";
import Example1 from "./pages/Example";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "blue" } }}>
      {/* <App1 /> */}
      {/* <Example /> */}

      <BrowserRouter>
        <App1 />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
