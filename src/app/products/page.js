import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl "
          width={500}
          height={300}
          alt="profile"
        />
        <div>
          <h1 className="text-5xl font-bold">All Products Page!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
