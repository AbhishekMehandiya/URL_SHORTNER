import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import DashboardPage from "../pages/DashboardPage"
import { checkAuth } from "../utils/helper"

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})