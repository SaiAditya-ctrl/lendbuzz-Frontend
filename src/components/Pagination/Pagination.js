import React from 'react';
import './Pagination.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={pageNumber === currentPage ? 'active' : ''}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
