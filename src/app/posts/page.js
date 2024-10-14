import React from "react";

const PostsPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div>
      <ul className="grid grid-cols-3 gap-5">
        {posts.slice(0, 10).map((post) => (
          <div
            className="flex flex-col border mb-4 p-4 items-center justify-center "
            key={post.id}
          >
            <li className="text-2xl">Title :{post.title}</li>
            <p className="text-xl">{post.body}</p>
            <button className="btn btn-ghost">Details</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
