import { getPostDetails } from "@/api/getPostDetails";

// dynamic metadata
export const generateMetadata = async ({ params }) => {
  // request de-duplication
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

  return (
    <div className="bg-gray-600 p-5 rounded mt-5">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostContent;
