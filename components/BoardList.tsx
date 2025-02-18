import Link from "next/link";

interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
}

const posts: Post[] = [
    { id: 1, title: "첫 번째 게시글", author: "Alice", date: "2025-02-17" },
    { id: 2, title: "두 번째 게시글", author: "Bob", date: "2025-02-16" },
    { id: 3, title: "세 번째 게시글", author: "Charlie", date: "2025-02-15" },
];

export default function BoardList() {
    return (
        <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">📋 게시판</h1>
    <table className="w-full border border-gray-200 rounded-lg">
    <thead>
        <tr className="bg-gray-100">
    <th className="p-2 border">번호</th>
        <th className="p-2 border text-left">제목</th>
        <th className="p-2 border">작성자</th>
        <th className="p-2 border">날짜</th>
        </tr>
        </thead>
        <tbody>
        {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
            <td className="p-2 border text-center">{post.id}</td>
                <td className="p-2 border">
            <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
        {post.title}
        </Link>
        </td>
        <td className="p-2 border text-center">{post.author}</td>
        <td className="p-2 border text-center">{post.date}</td>
        </tr>
))}
    </tbody>
    </table>
    </div>
);
}