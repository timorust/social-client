import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { store } from "./app/store"
import { Layout } from "./components/layout"
import { ThemeProvider } from "./components/theme-provider"
import { AuthGuard } from "./features/user/authGuard"
import "./index.css"
import { Auth } from "./pages/auth"
import { CurrentPost } from "./pages/current-post"
import { Followers } from "./pages/followers"
import { Following } from "./pages/following"
import { Posts } from "./pages/posts"
import { UserProfile } from "./pages/user-profile"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <CurrentPost />,
      },
      {
        path: "users/:id",
        element: <UserProfile />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "following",
        element: <Following />,
      },
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider>
            <AuthGuard>
              <RouterProvider router={router} />
            </AuthGuard>
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
