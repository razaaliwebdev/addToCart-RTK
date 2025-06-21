import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="bg-orange-50 py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
          Delicious Food, <br />
          Delivered Fast
        </h1>
        <p className="text-gray-700 text-lg">
          Craving something tasty? Discover the best dishes around you and get
          them delivered right to your door.
        </p>
        <Link
          to="/products"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-orange-600 transition"
        >
          Explore Menu
        </Link>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
          alt="Delicious Food"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
