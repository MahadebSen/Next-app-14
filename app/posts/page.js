import { getAllPost } from "@/api/getAllPost";
import Link from "next/link";

export const metadata = {
  title: "Posts",
  description: "This is post page",
};

const PostsPage = async () => {
  const posts = await getAllPost();

  return (
    <div className="flex flex-col gap-4 mt-4 items-center">
      <h1 className="font-medium text-4xl">All Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div key={post.id} className="bg-gray-600 p-5 rounded">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
