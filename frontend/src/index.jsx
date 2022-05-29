import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";

/**
* Root of react site 
*
* Imports Helment provider for the page head
* And App which defines the content and navigation
*/

// Render the site https://reactjs.org/docs/react-dom.html#render

$('select').selectpicker();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
