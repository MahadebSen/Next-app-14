import { Suspense } from "react";
import { getPostDetails } from "@/api/getPostDetails";
import { getComments } from "@/api/getComments";
import Comments from "@/components/Comments.component";
import { getAllPost } from "@/api/getAllPost";

//! dynamic metadata
export const generateMetadata = async ({ params }) => {
  //? request de-duplication
  const { id } = params;
  const post = await getPostDetails(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const PostContent = async ({ params }) => {
  const { id } = params;
  const post = await getPostDetails(id);

  //? progressive data fetching
  const comments = getComments(id);

  return (
    <div className="bg-gray-600 p-5 rounded mt-5">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="mb-9">{post.body}</p>

      <hr />
      <h3>Comments</h3>

      {/* Suspense is used to handle async comments data fetching */}
      <Suspense fallback="Loading comments .....">
        <Comments commentsPromise={comments} />
      </Suspense>
    </div>
  );
};

// it is used to generate static paths for dynamic routes.
// it is use for static site generation. (SSG)
export const generateStaticParams = async () => {
  const posts = await getAllPost();

  return posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  // return posts.map((post) => `/posts/${post.id}`);
};

export default PostContent;
