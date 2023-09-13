import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
type Props = {
  id: number;
  name: string;
  price: number;
  rating?: number;
  images: string[];
  margin?: string;
};

function ProductCard({ id, name, price, images, rating, margin }: Props) {
  return (
    <Link
      className={`${ margin ? margin : "mx-2"} w-56 flex flex-col justify-between border border-gray-200 rounded p-4 hover:shadow-lg transition duration-300 ease-in-out `}
      to={`/product/${id}`}
    >
      <img src={images[0]} alt={name} className="mb-4 w-full rounded" />
      {/* <h3 className="text-lg font-semibold break-words">{name}</h3> */}
      {/* if the name is too long, it will break into a new line */}
      <h3 className="text-lg font-semibold break-words">{name}</h3>
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
      <p className="text-gray-500 mb-4">${price}</p>
    </Link>
  );
}

export default ProductCard;
