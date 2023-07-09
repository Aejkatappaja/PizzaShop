import React from "react";

interface CartBottomProps {}

export const CartBottom: React.FC<CartBottomProps> = ({}) => {
  return (
    <div className="px-4 py-2 border-t-2 h-32 flex flex-col justify-end">
      <div className="flex justify-between px-2">
        <h1 className="font-bold">Total : </h1>
        <h1>R</h1>
      </div>
      <button className="btn btn-lg  gradient w-full mt-4">Checkout</button>
    </div>
  );
};
