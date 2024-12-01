import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello users</div>
}
