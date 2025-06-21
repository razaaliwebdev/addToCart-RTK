import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({ id, name, price, desc, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-sm bg-white  rounded-2xl overflow-hidden shadow-lg shadow-slate-400  transition-shadow duration-300">
      <div className="flex justify-center items-center">
        <img
          className="w-48 h-48 object-cover rounded-md"
          src={img}
          alt={name}
        />
      </div>
      <div className="p-5 space-y-3">
        <h4 className="text-xl font-bold text-orange-700">{name}</h4>
        <p className="text-sm text-gray-600 max-h-20 overflow-hidden text-ellipsis">
          {desc.length > 100 ? desc.slice(0, 97) + "..." : desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-600">
            ${price}
          </span>
          <button
            onClick={() => dispatch(addToCart({ id, name, img, price }))}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm cursor-pointer font-medium"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
