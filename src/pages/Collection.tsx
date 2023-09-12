import shoes from "../data/shoes.json";
import { useState } from "react";
import { getPaginatedData } from "../libs/pagination";
import ProductList from "../components/product/ProductList";
import ProductPagination from "../components/product/ProductPagination";

function Collection() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(Math.ceil(shoes.length / 6));
  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(shoes, page, 6)
  );

  const handlePageChange = (page: number) => {
    setPage(page);
    setPaginatedData(getPaginatedData(shoes, page, 6));
  };

  return (
    <div>
      <ProductList data={paginatedData} />
      <ProductPagination
        page={page}
        handlePageChange={handlePageChange}
        data={shoes}
        pages={pages}
      />
    </div>
  );
}

export default Collection;
