import React from "react";
import FoodData from "../assets/data";
import Product from "../components/Pruduct";

const Products = () => {
  return (
    <div className="my-6">
      <h2 className="text-2xl mb-4 font-medium text-orange-400">Products</h2>
      <div className="products grid lg:grid-cols-4 md:grid-cols-3 grid:cols-2 md:gap-5 gap-3">
        {FoodData.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
