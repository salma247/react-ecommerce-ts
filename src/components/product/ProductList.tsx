import ProductCard from "./ProductCard";
type props = {
  data: {
    id: number;
    name: string;
    price: number;
    images: string[];
    rating?: number;
  }[];
};

function ProductList({ data }: props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {data.map((product, i) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;
