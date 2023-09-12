import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageGallery from "../components/product/ProductGallary";
import products from "../data/shoes.json";
import {FaCartPlus} from "react-icons/fa"
import { useCartStore } from "../libs/zustand/store";

function Product() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(0);
  const [error, setError] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

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
    const product = { ...data as any, quantity, size: selectedSize };
    addToCart(product);
  };

  if (!data) return <div>Product not found</div>;

  return (
    <div className="grid grid-cols-1 justify-center gap-8 py-4 md:grid-cols-2">
      <ProductImageGallery images={data.images} />
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-2xl font-bold">{data.name}</h1>
        <p className="mb-4 text-gray-400">{data.description}</p>
        <p className="mb-4 text-gray-400">{data.price}$</p>
        { data.discount && <p className="mb-4 text-gray-400 line-through">{data.price}$</p>}
        <div className="flex items-center gap-2 mb-4">
          <p className="text-gray-400">Category:</p>
          <div className="flex gap-2">
            {data.categories.map((category) => (
              <p className="text-gray-400 border border-primary rounded-lg px-2 py-1">
                {category}
              </p> 
            ))}
          </div>
        </div>
        {/* choose size */}
        <div className="mb-4 flex gap-2 items-center">
          <p className="text-gray-400">Size:</p>
          {data.sizes.map((size) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-full border border-gray-200 transition-all duration-500 hover:border-primary ${
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
          <button className="w-2/3 rounded-lg bg-primary px-8 py-2 font-semibold text-white transition-all duration-500 flex items-center justify-center gap-2 hover:bg-white hover:text-primary" onClick={handleAddToCart}>
            <FaCartPlus className="text-lg" />
            Add to cart
          </button>
        </div>
          {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Product;
