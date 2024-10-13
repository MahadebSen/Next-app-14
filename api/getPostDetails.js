export const getPostDetails = async (id) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return post.json();
};
