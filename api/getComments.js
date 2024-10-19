export const getComments = async (id) => {
  console.log("yo id:", id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return res.json();
};
