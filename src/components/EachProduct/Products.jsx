import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Products({ categories }) {
  const param = useParams();

  const [data, setData] = useState([]);

  const getDataOfEachCategories = async () => {
    const categoryData = await Promise.all(
      categories.map(async category => {
        const { data } = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        return data.products;
      })
    );
    setData(categoryData);
  };

  console.log(data);

  useEffect(() => {
    getDataOfEachCategories();
  }, []);
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
