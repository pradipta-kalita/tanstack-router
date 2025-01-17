import {createRootRouteWithContext, Link, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {QueryClient} from "@tanstack/react-query";

export const Route =
    createRootRouteWithContext<{queryClient:QueryClient}>()({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})