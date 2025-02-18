import { notFound } from "next/navigation";
import {GetServerSideProps} from "next";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}


export default async function PostDetail({ params }: { params: { id: string } }) {
    try {
        const post = await fetchPost(params.id);

        return (
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-500 text-sm">
                    작성자: {post.author} | {post.date}
                </p>
                <div className="mt-4 p-4 border rounded-lg bg-gray-50">{post.content}</div>
            </div>
        );
    } catch (error) {
        // @ts-ignore
        return <p>{error.message}</p>;
    }
}


async function fetchPost(id: string): Promise<Post> {
    const res = await fetch(`http://localhost:8080/hello/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }

    return res.json();
}