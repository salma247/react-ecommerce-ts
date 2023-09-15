import React from "react";
import { useCartStore } from "../../libs/zustand/store";
import { FaTrash } from "react-icons/fa";

type Props = {
  item: CartItem;
};

function CartCard({ item }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={item.images[0]} alt="product" className="w-16 rounded" />
        <div>
          <h3 className="font-bold">{item.name} x {item.quantity}</h3>
          <p className="text-gray-400">{item.price}$</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => removeFromCart(item.cartId)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
