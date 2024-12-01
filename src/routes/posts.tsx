import { createFileRoute } from '@tanstack/react-router'
import {postsQueryOptions} from "../fetchPosts.ts";

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
    loader: function ({context: {queryClient}}) {
        return queryClient.ensureQueryData(postsQueryOptions());
    },
    pendingComponent:()=><div>Loading...</div>
})

function RouteComponent() {
    const posts = Route.useLoaderData();
  return <div>
      <p>{posts.map(
          post => (
              <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
              </div>
          )
      )}</p>
  </div>
}
