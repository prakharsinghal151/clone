import React from "react";

interface PaymentProps {
  total: number;
}

export const Payment: React.FC<PaymentProps> = ({ total }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Checkout
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-3 rounded"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border p-3 rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border p-3 rounded"
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full bg-amazon-orange hover:bg-yellow-500 text-black font-bold py-3 rounded-lg mt-4"
            onClick={() => alert("Fake Payment Successful 🎉")}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
