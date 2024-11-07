export const getComments = async (id) => {
  console.log("yo id:", id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      // force-cache is used to cache the response (default behavior of next.js)
      // cache: "force-cache"
      //
      // no-store is used to not cache the response
      // cache: "no-store"
      //
      // it is used to cache the response for 10 seconds
      // next: {
      //   revalidate: 10,
      // },
    }
  );

  return res.json();
};
