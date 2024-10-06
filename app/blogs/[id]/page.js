import { notFound } from "next/navigation";

export const metadata = {
  title: `Blog | Content`,
  description: "This is blog content page",
};

const BlogContent = ({ params }) => {
  const { id } = params;

  if (id === "4") {
    return notFound();
  }

  return (
    <div className="mt-4">
      <p>This is the content of blog {id}</p>
    </div>
  );
};

export default BlogContent;
