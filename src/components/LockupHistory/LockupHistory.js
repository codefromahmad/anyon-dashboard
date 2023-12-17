import React, { useState } from "react";
import "./lockuphistory.css";
import upDown from "../../assets/images/upDown.svg";
import prev from "../../assets/images/prev.svg";
import next from "../../assets/images/next.svg";
import start from "../../assets/images/start.svg";
import end from "../../assets/images/end.svg";

const LockupHistory = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [active, setActive] = useState("ongoing");

  const tableData = [
    {
      title: "Rent",
      amount: 200000,
      duration: 6,
      rate: "10%",
      status: "success",
    },
    {
      title: "Rent",
      amount: 100000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
    {
      title: "Rent",
      amount: 10000,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 2000000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 300000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },

    {
      title: "Rent",
      amount: 2000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 200,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 500000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
    {
      title: "Rent",
      amount: 2000000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 300000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },

    {
      title: "Rent",
      amount: 2000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 200,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 500000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
    {
      title: "Rent",
      amount: 2000000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 300000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },

    {
      title: "Rent",
      amount: 2000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 200,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 500000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
    {
      title: "Rent",
      amount: 2000000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 300000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },

    {
      title: "Rent",
      amount: 2000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 200,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 500000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
    {
      title: "Rent",
      amount: 2000000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 300000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },

    {
      title: "Rent",
      amount: 2000,
      duration: 6,
      rate: "10%",
      status: "success",
    },

    {
      title: "Rent",
      amount: 200,
      duration: 6,
      rate: "10%",
      status: "failed",
    },

    {
      title: "Rent",
      amount: 500000,
      duration: 6,
      rate: "10%",
      status: "pending",
    },
  ];
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = tableData.slice(startIndex, endIndex);

  const sortedCurrentItems = currentItems.slice().sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      }
    }
    return 0;
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  return (
    <div className="lockupTableContainer">
      <div className="lockupTableHeader">
        <div className="lockupHeaderLeft">
          <p>Lockup History</p>
        </div>

        <div className="lockupHeaderRight">
          <div className="savingOptions">
            <div
              onClick={() => setActive("all")}
              className={`${
                active === "all"
                  ? "active-middle-item"
                  : "nonactive-middle-item"
              }`}
            >
              <p>All</p>
            </div>
            <div
              onClick={() => setActive("ongoing")}
              className={`${
                active === "ongoing"
                  ? "active-middle-item"
                  : "nonactive-middle-item"
              }`}
            >
              <p>Ongoing</p>
            </div>
            <div
              onClick={() => setActive("completed")}
              className={`${
                active === "completed"
                  ? "active-middle-item"
                  : "nonactive-middle-item"
              }`}
            >
              <p>Completed</p>
            </div>
          </div>
        </div>
      </div>
      <table className="lockupTable" responsive hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("dateAndtime")}>
              Title <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("type")}>
              Amount <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("channel")}>
              Duration(in months) <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("amount")}>
              Interest rate <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("status")}>
              Status <img src={upDown} alt="upDown" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCurrentItems.map((row, index) => (
            <tr key={index}>
              <td>{row.title}</td>
              <td>{row.amount}</td>
              <td>{row.duration}</td>
              <td>{row.rate}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="paginationContainer">
        <div className="pages">
          <span>{`Page ${currentPage} of ${totalPages} (${tableData.length} items)`}</span>
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            <img src={start} alt="start" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={prev} alt="prev" />
          </button>

          {/* Show the first page */}
          <button
            onClick={() => handlePageChange(1)}
            className={currentPage === 1 ? "active" : ""}
          >
            1
          </button>

          {/* Show ellipses if there are more than two pages */}
          {totalPages > 2 && currentPage > 2 && <span>...</span>}

          {/* Show the current page */}
          {currentPage > 1 && currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage)}
              className="active"
              // style={{ backgroundColor: "green" }} // Added style for the green background
            >
              {currentPage}
            </button>
          )}

          {/* Show the next page */}
          {totalPages > 1 && currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              {currentPage + 1}
            </button>
          )}

          {/* Show the last page */}
          {totalPages > 1 && currentPage < totalPages - 1 && <span>...</span>}
          {currentPage + 1 != totalPages && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className={currentPage === totalPages ? "active" : ""}
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={next} alt="next" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <img src={end} alt="end" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LockupHistory;
