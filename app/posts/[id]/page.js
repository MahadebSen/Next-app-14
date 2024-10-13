import { getPostDetails } from "@/api/getPostDetails";

const PostContent = async ({ params }) => {
  const { id } = params;
  const post = await getPostDetails(id);

  return (
    <div className="bg-gray-200 p-5 rounded mt-5">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostContent;
