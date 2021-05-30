import React from "react";
import ReactPaginate from "react-paginate";
import { useRecoilState } from "recoil";
import { activePageState, pageNumberState } from "../../recoil/state";
import "./Pagination.css";

const Pagination = () => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const [activePage, setActivePage] = useRecoilState(activePageState);

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageNumber}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(page) => setActivePage(page.selected)}
      containerClassName={"pagination"}
      activeClassName={"active"}
      onPageActive={(page) => console.log(page)}
    />
  );
};

export default Pagination;
