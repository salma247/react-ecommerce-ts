import { useState } from "react";
import shoes from "../data/shoes.json";
import { getPaginatedData } from "../libs/pagination";
import ProductList from "../components/product/ProductList";
import ProductPagination from "../components/product/ProductPagination";

const data = shoes.filter((item) => {
  return item.categories.includes("men");
});

function Men() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(Math.ceil(data.length / 6));
  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(data, page, 6)
  );

  const handlePageChange = (page: number) => {
    setPage(page);
    setPaginatedData(getPaginatedData(data, page, 6));
  };

  return <div>
    <ProductList data={paginatedData} />
    <ProductPagination page={page} handlePageChange={handlePageChange} data={data} pages={pages} />
  </div>;
}

export default Men;
