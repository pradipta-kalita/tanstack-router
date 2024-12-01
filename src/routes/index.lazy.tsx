import {createLazyFileRoute, Link} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <Link to='/search' search={{
                limit:3,
                query: 'pol kalita'
            }} >Search something</Link>
        </div>
    )
}