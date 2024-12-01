import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello from layout
    <Outlet/>
  </div>
}
