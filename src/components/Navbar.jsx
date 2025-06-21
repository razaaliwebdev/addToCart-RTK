import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold audioWide text-orange-500"
      >
        Food<span className="text-orange-300">X</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-base font-medium">
        <Link
          to="/"
          className="text-gray-700 hover:text-orange-400 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-gray-700 hover:text-orange-400 transition-colors duration-300"
        >
          Products
        </Link>

        {/* Cart Icon with Badge */}
        <Link
          to="/cart"
          className="relative text-orange-500 hover:text-orange-600 transition duration-300"
        >
          <MdShoppingBag className="text-3xl" />
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold shadow">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
