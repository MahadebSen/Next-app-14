const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise;

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-600 p-5 rounded">
          <h2 className="text-xl font-bold mb-2">{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
