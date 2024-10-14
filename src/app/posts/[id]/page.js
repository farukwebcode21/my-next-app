import React from "react";

const DynamicPost = ({ params }) => {
  console.log(params.id);
  return (
    <div>
      <h1 className="text-2xl uppercase text-pink-500">
        Dynamic Post Details:
      </h1>
    </div>
  );
};

export default DynamicPost;
