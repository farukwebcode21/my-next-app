import Link from "next/link";
import React from "react";
import { Headland_One } from "next/font/google";

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "my-next-app|post",
  description: "Generate post details pages",
};

const PostsPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div className={`${headland.className}`}>
      <ul className="grid grid-cols-3 gap-5">
        {posts.slice(0, 10).map((post) => (
          <div
            className="flex flex-col border mb-4 p-4 items-center justify-center "
            key={post.id}
          >
            <li className="text-sm">Title :{post.title}</li>
            <p className="text-xs">{post.body}</p>
            <Link
              href={`/posts/${post.id}`}
              className="btn mt-5 bg-primary text-black"
            >
              Details
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
