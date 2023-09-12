import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Carousel } from "@trendyol-js/react-carousel";

type ProductCarouselProps = {
  data: {
    id: number;
    name: string;
    price: number;
    images: string[];
    rating?: number;
    }[];
};

const ProductCarousel = ({ data }: ProductCarouselProps) => {
  const [show, setShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShow(1.5);
        } else if (window.innerWidth < 1024) {
        setShow(2.5);
        } else {
        setShow(3.5);
        }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <Carousel show={show} slide={2} className="w-full" swiping={true}>
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
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
