import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImageGallery from "../components/product/ProductGallary";
import products from "../data/shoes.json";
import { FaCartPlus } from "react-icons/fa";
import { useCartStore } from "../libs/zustand/store";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../components/button/Button";

function Product() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  if (!id) return <div>Product not found</div>;
  const data = products.find((item) => item.id === +id);

  const changeQuantity = (value: number) => {
    if (quantity === 1 && value === -1) return;
    setQuantity(quantity + value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }
    const product = { ...(data as Product), quantity, size: selectedSize, cartId: uuidv4() };
    addToCart(product);
    setMessage("Product added to cart");
  };

  if (!data) return <div>Product not found</div>;

  return (
    <div className="mx-auto grid w-11/12 grid-cols-1 justify-center gap-8 py-4 md:grid-cols-2 xl:w-8/12">
      <ProductImageGallery images={data.images} />
      <div className="relative flex flex-col justify-center">
        {message && (
          <p className="absolute left-0 right-0 top-0 mb-4 rounded-lg bg-green-100 py-2 text-center text-green-800 ">
            {message}
          </p>
        )}
        <h1 className="mb-4 text-2xl font-bold">{data.name}</h1>
        <p className="mb-4 text-gray-400">{data.description}</p>
        <p className="mb-4 text-gray-400">{data.price}$</p>
        {data.discount && (
          <p className="mb-4 text-gray-400 line-through">{data.price}$</p>
        )}
        <div className="mb-4 flex items-center gap-2">
          <p className="text-gray-400">Category:</p>
          <div className="flex gap-2">
            {data.categories.map((category) => (
              <p
                className="rounded-lg border border-primary px-2 py-1 text-gray-400"
                key={category}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        {/* choose size */}
        <div className="mb-4 flex items-center gap-2">
          <p className="text-gray-400">Size:</p>
          {data.sizes.map((size) => (
            <button
              key={size}
              className={`h-10 w-10 rounded-full border border-gray-200 transition-all duration-500 hover:border-primary ${
                selectedSize === size
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
              onClick={() => {
                setSelectedSize(size);
                setError("");
              }}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="mb-4 flex gap-2">
          <div className="flex w-1/3 justify-between gap-2 rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => changeQuantity(-1)}
              className="flex-1 font-extrabold text-primary"
            >
              -
            </button>
            <span className="flex-1 text-center text-lg font-extrabold text-gray-400">
              {quantity}
            </span>
            <button
              className="flex-1 font-extrabold text-primary"
              onClick={() => changeQuantity(1)}
            >
              +
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            variant="primary"
            size="md"
            type="button"
          >
            <FaCartPlus className="text-lg" /> Add to cart
          </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Product;
