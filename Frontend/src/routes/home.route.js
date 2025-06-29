import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import HomePage from "../pages/Home"

export const homePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
  })