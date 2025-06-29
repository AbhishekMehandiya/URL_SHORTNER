import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./home.route"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dasboard.roue"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])