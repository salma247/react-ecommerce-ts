import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Carousel } from "@trendyol-js/react-carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
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
  const [show, setShow] = useState(window.innerWidth / 350);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth / 350);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  const rightArrow = (
    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-all duration-500 hover:bg-primary hover:text-white">
      <FaArrowRight />
    </button>
  );

  const leftArrow = (
    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-all duration-500 hover:bg-primary hover:text-white">
      <FaArrowLeft />
    </button>
  );

  return (
    <div className="w-full">
      <Carousel
        show={show}
        slide={1}
        swiping={isMobile}
        dynamic
        className="flex w-full items-center justify-center gap-2"
        {...(!isMobile && { rightArrow, leftArrow })}
      >
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
