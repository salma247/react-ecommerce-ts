import { useState } from "react";
import shoes from "../data/shoes.json";
import { getPaginatedData } from "../libs/pagination";
import ProductList from "../components/product/ProductList";
import ProductPagination from "../components/product/ProductPagination";
import { useParams, useNavigate } from "react-router-dom";

const data = shoes.filter((item) => {
  return item.categories.includes("men");
});

function Men() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(page ? parseInt(page) : 1);
  const [pages, setPages] = useState(Math.ceil(data.length / 12));
  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(data, pageNo, 12)
  );

  const handlePageChange = (page: number) => {
    setPageNo(page);
    setPaginatedData(getPaginatedData(data, page, 12));
    navigate(`/men/${page}`);
  };

  return <div>
    <ProductList data={paginatedData} />
    <ProductPagination page={pageNo} handlePageChange={handlePageChange} data={data} pages={pages} />
  </div>;
}

export default Men;
