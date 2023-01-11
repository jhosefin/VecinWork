import React from "react";
/* import ReactDOM from "react-dom"; */
import ReactDOM from "react-dom/client";
import App from './App';


/* ReactDOM.render(<App/>, document.querySelector("#root"));
 */
// Create a root.
const root = ReactDOM.createRoot(document.querySelector("#root"));

// Initial render
root.render(<App />);