import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { store } from "./app/store"
import { ThemeProvider } from "./components/theme-provider"
import "./index.css"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <h1>Auth</h1>,
  },
  {
    path: "/",
    element: <h1>Login</h1>,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
