
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPaginatedData } from "../libs/pagination";
import ProductList from "../components/product/ProductList";
import ProductPagination from "../components/product/ProductPagination";
import shoes from "../data/shoes.json";

type Props = {
    category: string;
}

function Category({ category }: Props) {
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [pageNo, setPageNo] = useState(page ? parseInt(page) : 1);

  const data = category === "collection" ? shoes : shoes.filter((shoe) => shoe.categories.includes(category));

  const [pages] = useState(Math.ceil(data.length / 12));
  const [paginatedData, setPaginatedData] = useState(
    getPaginatedData(data, pageNo, 12)
  );

  const handlePageChange = (page: number) => {
    setPageNo(page);
    setPaginatedData(getPaginatedData(data, page, 12));
    navigate(`/${category}/${page}`);
  };

    useEffect(() => {
        if (location.pathname.split("/")[1] !== category) {
            setPageNo(1);
        }
    }, [category, location.pathname]);


  return (
    <div>
      <ProductList data={paginatedData} />
      <ProductPagination
        page={pageNo}
        handlePageChange={handlePageChange}
        pages={pages}
      />
    </div>
  );
}

export default Category;
