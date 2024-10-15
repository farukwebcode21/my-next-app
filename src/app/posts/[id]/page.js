import React from "react";

export const generateMetadata = async ({ params }) => {
  const id = params.id;

  // fetch data
  const product = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());
  return {
    title: product.title,
    openGraph: {
      description: "news details",
    },
  };
};

const DynamicPost = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const { title, body, id } = await data.json();

  return (
    <div className="items-center py-8">
      <h3 className="text-xl uppercase text-pink-500">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default DynamicPost;
