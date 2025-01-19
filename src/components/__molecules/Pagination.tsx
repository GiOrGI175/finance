"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Transaction {
  id: string;
  RecipientOrSender: string;
  category: string;
  Amount: string;
  TransactionDate: string;
}

type PaginationProps = {
  search: string;
  category?: string;
  sort: "A" | "Z" | "High" | "Low" | "Latest";
};

const itemVariants = {
  hidden: (custom: number) => ({
    opacity: 0,
    y: custom % 2 === 0 ? -100 : 100,
  }),
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

export default function Pagination({
  search,
  category,
  sort,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(
    []
  );

  const indexOfLastTransaction = currentPage * usersPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - usersPerPage;

  useEffect(() => {
    axios
      .get("https://finance-back-heee.onrender.com/transactions/transaction")
      .then((response) => {
        console.log(response.data);
        let transactions: Transaction[] = response.data;

        if (search) {
          transactions = transactions.filter((transaction) =>
            transaction.RecipientOrSender.toLowerCase().includes(
              search.toLowerCase()
            )
          );
        }

        if (category) {
          transactions = transactions.filter(
            (transaction) => transaction.category === category
          );
        }

        // Apply sorting
        if (sort === "A") {
          transactions.sort((a, b) =>
            a.RecipientOrSender.localeCompare(b.RecipientOrSender)
          );
        }
        if (sort === "Z") {
          transactions.sort((a, b) =>
            b.RecipientOrSender.localeCompare(a.RecipientOrSender)
          );
        }
        if (sort === "High") {
          transactions.sort(
            (a, b) => parseFloat(b.Amount) - parseFloat(a.Amount)
          );
        }
        if (sort === "Low") {
          transactions.sort(
            (a, b) => parseFloat(a.Amount) - parseFloat(b.Amount)
          );
        }

        
        setTransactions(transactions);
        setFilteredTransactions(
          transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
        );
      })
      .catch((err) => console.log(err));
  }, [search, category, sort, currentPage]);

  const pageNumbers = [];
  const totalPosts = transactions.length; 

  for (let i = 1; i <= Math.ceil(totalPosts / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPageDisabled = currentPage === 1;
  const nextPageDisabled = currentPage === pageNumbers.length;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <motion.div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <p>No transactions found</p>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              variants={itemVariants}
              custom={index} 
              initial="hidden"
              animate="visible"
              className="flex justify-between items-center py-4 md:px-6 bg-white shadow-sm rounded-lg hover:bg-gray-50 transition ease-in-out"
            >
              <div className="flex items-center space-x-3 md:w-[240px] lg:w-[428px]">
                <div>
                  <h3 className="font-medium text-gray-800">
                    {transaction.RecipientOrSender}
                  </h3>
                  <h3 className="text-gray-600 w-[120px] md:hidden sm:flex">
                    {transaction.category}
                  </h3>
                </div>
              </div>
              <h3 className="text-gray-600 w-[120px] md:flex sm:hidden">
                {transaction.category}
              </h3>
              <h3 className="text-gray-600 sm:hidden md:flex">
                {new Date(transaction.TransactionDate)
                  .toISOString()
                  .split("T")[0]}
              </h3>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {transaction.Amount}$
                </h3>
                <h3 className="text-gray-600 md:hidden">
                  {new Date(transaction.TransactionDate)
                    .toISOString()
                    .split("T")[0]}
                </h3>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      <div className="flex justify-between mt-[48px]">
        <button
          type="button"
          className="w-[94px] h-[40px] border-gray-300 rounded-md border-[1px] hover:bg-stone-500 transition duration-300"
          onClick={handlePrevPage}
          disabled={prevPageDisabled}
        >
          Prev
        </button>

        <div className="flex gap-[8px]">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`w-[40px] h-[40px] border-gray-300 rounded-md border-[1px] ${
                currentPage === page
                  ? "bg-black text-white transition duration-500"
                  : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="w-[94px] h-[40px] border-gray-300 rounded-md border-[1px] hover:bg-stone-500 transition duration-300"
          onClick={handleNextPage}
          disabled={nextPageDisabled}
        >
          Next
        </button>
      </div>
    </>
  );
}