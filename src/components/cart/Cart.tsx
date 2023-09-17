import { useState, useEffect, useRef } from "react";
import { useCartStore } from "../../libs/zustand/store";
import { Link } from "react-router-dom";
import close from "../../images/icon-close.svg";
import cart from "../../images/icon-cart.svg";
import CartCard from "./CartCard";

function Cart() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const getItems = useCartStore((state) => state.getCartItems);
  const items = useCartStore((state) => state.cartItems);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartRef]);

  return (
    <div className="relative" ref={cartRef}>
      <button
        className="relative flex items-center px-3 py-2 text-gray-300 hover:border-white hover:text-white"
        onClick={toggle}
      >
        <img src={cart} alt="cart" />
        <span className="absolute bottom-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
          {items && items.length}
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-10 w-80 bg-gray-100 border border-gray-200 rounded shadow-xl lg:w-96">
          <div className="flex items-center justify-between px-4 py-2">
            <h3 className="text-xl font-bold">Cart</h3>
            <button onClick={toggle}>
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="px-4 py-2">
            {items && !items.length && <div className="py-2">Cart is empty 😢</div>}
            {items?.map((item) => (
                <CartCard key={item.cartId} item={item} />
              ))}

            <div className="flex justify-between">
              <div className="flex items-center">
                <span className="text-gray-400">Total</span>
                <span className="text-xl font-bold ml-1">
                  ${items?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                </span>
                </div>
              <Link
                to="/checkout"
                className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-hover transition-all duration-500"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
