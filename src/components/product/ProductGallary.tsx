import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
};

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <img src={currentImage} alt="product" className="w-full" />
      <div className="flex gap-2 mt-4">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="product"
            className={`w-16 h-16 rounded cursor-pointer ${
              currentImage === image && "border-2 border-primary"
            }`}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
