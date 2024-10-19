import Button from "@/components/Button.component";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "This is blogs page",
};

const BlogsPage = () => {
  //! Uncomment the line below to test the error boundary
  // throw new Error("This is a test error");

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "This is the content of blog 1",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "This is the content of blog 2",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "This is the content of blog 3",
    },
  ];

  return (
    <div className="p-5">
      <p>This is the blogs page</p>

      <ul className="flex flex-row gap-4 my-4">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
          </li>
        ))}
      </ul>

      <Button />
    </div>
  );
};

export default BlogsPage;
