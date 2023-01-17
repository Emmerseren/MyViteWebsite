import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContextProvider, { ThemeContext } from './context/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
