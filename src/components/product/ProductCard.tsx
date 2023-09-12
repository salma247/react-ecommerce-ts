import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
type Props = {
  id: number;
  name: string;
  price: number;
  rating?: number;
  images: string[];
};

function ProductCard({ id, name, price, images, rating }: Props) {
  return (
    <Link
      className="mx-auto flex w-64 flex-col justify-between"
      to={`/product/${id}`}
    >
      <img src={images[0]} alt={name} className="mb-4 w-full rounded" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                rating && rating > i ? "text-primary" : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-500">4.0</p>
      </div>
      <p className="text-gray-500">${price}</p>
    </Link>
  );
}

export default ProductCard;
