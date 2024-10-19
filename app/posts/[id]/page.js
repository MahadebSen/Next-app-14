import { Suspense } from "react";
import { getPostDetails } from "@/api/getPostDetails";
import { getComments } from "@/api/getComments";
import Comments from "@/components/Comments.component";

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

export default PostContent;
