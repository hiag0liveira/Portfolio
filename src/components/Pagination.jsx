import React from "react";
import "../styles/components/pagination.sass";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <span
        className="arrow-page"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardArrowLeft size={35} />
      </span>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <span
        className="arrow-page"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <MdOutlineKeyboardArrowRight size={35} />
      </span>
    </div>
  );
};

export default Pagination;
