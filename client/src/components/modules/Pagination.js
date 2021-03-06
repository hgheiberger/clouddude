import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from "uuid";

import SingleLevel from "./SingleLevel";

import "./Pagination.css";

const Pagination = ({
  itemsPerPage,
  levels,
  setActiveLevel,
  setLevelID,
  images,
  itemOffset,
  setItemOffset,
  page,
  setPage,
}) => {
  const [currentLevels, setCurrentLevels] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentLevels(levels.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(levels.length / itemsPerPage));
  }, [levels, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % levels.length;
    setPage(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <div className="Pagination-container">
      <div className="Pagination-content">
        {currentLevels.map((level, index) => {
          return (
            <div className="Repository-item" key={uuidv4()}>
              <SingleLevel
                className="Repository-item"
                level={level}
                setActiveLevel={setActiveLevel}
                setLevelID={setLevelID}
                image={images[index + itemOffset]}
              />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="← Previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item next"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="custom-pagination"
        activeClassName="active"
        disableClassName="disable"
        renderOnZeroPageCount={null}
        forcePage={page}
      />
    </div>
  );
};

export default Pagination;
