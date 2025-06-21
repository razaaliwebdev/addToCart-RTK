import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2 text-sm"
            >
              <div>
                <p>{item.name}</p>
                <p className="text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="text-right text-lg font-bold pt-4 border-t">
            Total: ${totalAmount.toFixed(2)}
          </div>

          {/* Add payment form or button below */}
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
