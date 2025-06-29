import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import AuthPage from "../pages/Auth"

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
  })