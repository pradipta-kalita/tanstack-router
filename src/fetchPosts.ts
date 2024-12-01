import {queryOptions} from "@tanstack/react-query";

export type Post = {
    id: number;
    title: string;
    body: string;
}

export async function getPosts(){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await posts.json();
    await new Promise(resolve => setTimeout(resolve, 3000));
    return data;
}

export function postsQueryOptions(){
    return queryOptions({
        queryKey: [
            'posts'
        ],
        queryFn:getPosts,
    })
}