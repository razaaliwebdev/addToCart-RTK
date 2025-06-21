import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice"; // Adjust the path as needed
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Items</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <h3 className="text-gray-600">${item.price.toFixed(2)}</h3>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="mt-2">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>

              <div className="mt-2">
                <h3>
                  <em>Total: ${(item.price * item.quantity).toFixed(2)}</em>
                </h3>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right text-lg font-semibold">
            Grand Total: $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
            <br />
            <Link to={"/checkout"}>
              {" "}
              <button className="px-5 py-1.5 cursor-pointer bg-orange-500 rounded-full my-4">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
