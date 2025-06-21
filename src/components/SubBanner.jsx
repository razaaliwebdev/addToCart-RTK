import React from "react";
import { FaShippingFast, FaLeaf, FaClock } from "react-icons/fa";

const SubBanner = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Fast Delivery */}
      <div className="flex flex-col items-center space-y-4">
        <FaShippingFast className="text-4xl text-orange-500" />
        <h3 className="text-lg font-semibold text-orange-600">Fast Delivery</h3>
        <p className="text-sm text-gray-600 max-w-xs">
          Get your favorite meals delivered hot and fresh in under 30 minutes.
        </p>
      </div>

      {/* Fresh Ingredients */}
      <div className="flex flex-col items-center space-y-4">
        <FaLeaf className="text-4xl text-orange-500" />
        <h3 className="text-lg font-semibold text-orange-600">Fresh Ingredients</h3>
        <p className="text-sm text-gray-600 max-w-xs">
          We use only the best and freshest ingredients for every dish we serve.
        </p>
      </div>

      {/* 24/7 Support */}
      <div className="flex flex-col items-center space-y-4">
        <FaClock className="text-4xl text-orange-500" />
        <h3 className="text-lg font-semibold text-orange-600">24/7 Service</h3>
        <p className="text-sm text-gray-600 max-w-xs">
          Whether it's lunch, dinner, or a midnight snack — we're here for you.
        </p>
      </div>
    </section>
  );
};

export default SubBanner;
