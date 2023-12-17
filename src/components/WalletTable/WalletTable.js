import React, { useState } from "react";
import "./wallettable.css";
import { FiSearch } from "react-icons/fi";
import upDown from "../../assets/images/upDown.svg";
import prev from "../../assets/images/prev.svg";
import next from "../../assets/images/next.svg";
import start from "../../assets/images/start.svg";
import end from "../../assets/images/end.svg";
import { HiChevronDown } from "react-icons/hi2";
import { LuFilter } from "react-icons/lu";

const WalletTable = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const tableData = [
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 200000,
      status: "success",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 100000,
      status: "pending",
    },
    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 10000,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Bank Transfer",
      amount: 2000000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "Paystack",
      amount: 300000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Received from holdings",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Sent to holdings",
      channel: "Paystack",
      amount: 200,
      status: "failed",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Withdraw",
      channel: "--",
      amount: 500000,
      status: "pending",
    },

    {
      dateAndtime: "2023-09-14 01:52 AM",
      type: "Deposit",
      channel: "Bank Transfer",
      amount: 2000,
      status: "success",
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
    <div className="walletTableContainer">
      <div className="walletTableHeader">
        <div className="walletHeaderLeft">
          <p>Transaction History</p>
        </div>

        <div className="walletHeaderRight">
          <div className="walletSearchBar">
            <FiSearch color="#C3C3C3" />
            <input placeholder="Search" />
          </div>
          <div className="selectFilter">
            <LuFilter color="black" />
            <p>Filters</p>
            <HiChevronDown color="black" style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>
      <table className="walletTable" responsive hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("dateAndtime")}>
              Date & Time <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("type")}>
              Type <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("channel")}>
              Channel <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("amount")}>
              Amount <img src={upDown} alt="upDown" />
            </th>
            <th onClick={() => handleSort("status")}>
              Status <img src={upDown} alt="upDown" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCurrentItems.map((row, index) => (
            <tr key={index}>
              <td>{row.dateAndtime}</td>
              <td>{row.type}</td>
              <td>{row.channel}</td>
              <td>{row.amount}</td>
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

export default WalletTable;
