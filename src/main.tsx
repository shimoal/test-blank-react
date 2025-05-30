import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import './index.css'; // Your React app's global styles


// Function to render the React app into a specific DOM element
function renderReactApp(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    // For React 18+
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error(`Container with ID "${containerId}" not found for React app.`);
  }
}

// Expose the render function globally so the Vue app can call it
// @ts-expect-error -- we need a global function on the window object
window.renderReactApp = renderReactApp;