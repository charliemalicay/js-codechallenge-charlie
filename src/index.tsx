import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from 'react-dom/client';
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
