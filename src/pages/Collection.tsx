import shoes from "../data/shoes.json";
import { useState } from "react";
import { getPaginatedData } from "../libs/pagination";
import ProductList from "../components/product/ProductList";
import ProductPagination from "../components/product/ProductPagination";
import { useParams, useNavigate } from "react-router-dom";

function Collection() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(page ? parseInt(page) : 1);
  const [pages, setPages] = useState(Math.ceil(shoes.length / 12));
  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(shoes, pageNo, 12)
  );

  const handlePageChange = (page: number) => {
    setPageNo(page);
    setPaginatedData(getPaginatedData(shoes, page, 12));
    navigate(`/collection/${page}`);
  };

  return (
    <div>
      <ProductList data={paginatedData} />
      <ProductPagination
        page={pageNo}
        handlePageChange={handlePageChange}
        data={shoes}
        pages={pages}
      />
    </div>
  );
}

export default Collection;
