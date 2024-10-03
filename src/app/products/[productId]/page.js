import React from "react";

const ProductOne = ({ params }) => {
  return (
    <div>
      <h1>Product One</h1>
      <h1>Searching Id :{params.productId}</h1>
    </div>
  );
};

export default ProductOne;
