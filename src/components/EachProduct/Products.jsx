import { useParams } from "react-router-dom";
import { useState } from "react";

function Products() {
  const { id } = useParams();

  return (
    <div>
      <h1>Each Product Data</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quod.
      </p>
    </div>
  );
}

export default Products;
