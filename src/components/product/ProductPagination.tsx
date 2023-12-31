
import { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
type Props = {
  page: number;
  pages: number;
  handlePageChange: (page: number) => void;
};

const ProductPagination = ({ page, pages, handlePageChange }: Props) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const scrollToPage = () => {
    if (paginationRef.current) {
      paginationRef.current.scrollLeft =
        (page - 1) * paginationRef.current.children[0].clientWidth;
      if (page === 1) {
        paginationRef.current.scrollLeft = 0;
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToPage();
    scrollToTop();
  }, [page]);

  return (
    <div className="flex justify-center items-center space-x-4 mt-8 w-1/2 mx-auto"> 
        <button
          className="px-2 py-1 bg-gray-100 rounded-md disabled:opacity-50"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <FaChevronLeft />
        </button>
        <div className="flex space-x-2 overflow-hidden" ref={paginationRef}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md ${
                page === i + 1
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="px-2 py-1 bg-gray-100 rounded-md disabled:opacity-50"
          disabled={page === pages}
          onClick={() => handlePageChange(page + 1)}
        >
          <FaChevronRight />
        </button>
      
    </div>
  );

};

export default ProductPagination;
