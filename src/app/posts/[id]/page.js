import React from "react";

const DynamicPost = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const { title, body, id } = await data.json();

  return (
    <div className="items-center py-8">
      <h2>{id}</h2>
      <h3 className="text-xl uppercase text-pink-500">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default DynamicPost;
