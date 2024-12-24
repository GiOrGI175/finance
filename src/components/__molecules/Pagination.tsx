"use client";
import React, { useState } from "react";
import Image from "next/image";
import usersData from "../../commons/hooks/UsersData";

type PaginationProps = {
  search: string;
  category?: string;
  sort?: "A" | "Z" | "High" | "Low";
};

export default function Pagination({
  search,
  category,
  sort,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [UsersPerPage] = useState(10);

  const indexOfLastTransaction = currentPage * UsersPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - UsersPerPage;

  // filter search
  let filteredTransactions = usersData.filter((user) => {
    return (
      (user.SenderName.toLowerCase().includes(search.toLowerCase()) ||
        search === "") &&
      (category ? user.Category === category : true) // filter category
    );
  });
  /// sort

  if (sort === "A") {
    filteredTransactions = filteredTransactions.sort((a, b) =>
      a.SenderName.localeCompare(b.SenderName)
    );
  }
  if (sort === "Z") {
    filteredTransactions = filteredTransactions.sort((a, b) =>
      b.SenderName.localeCompare(a.SenderName)
    );
  }
  if (sort === "High") {
    filteredTransactions = filteredTransactions.sort(
      (a, b) => b.Amount - a.Amount
    );
  }
  if (sort === "Low") {
    filteredTransactions = filteredTransactions.sort(
      (a, b) => a.Amount - b.Amount
    );
  }

  const currentTransaction = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const pageNumbers = [];
  const totalPosts = filteredTransactions.length;

  for (let i = 1; i <= Math.ceil(totalPosts / UsersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="space-y-6">
        {currentTransaction.map((user, index) => (
          <div
            key={user.id}
            className="flex justify-between items-center py-4 px-6 bg-white shadow-sm rounded-lg hover:bg-gray-50 transition ease-in-out"
          >
            <div className="flex items-center space-x-3 w-[428px] ">
              <Image
                src={user.Image}
                width={40}
                height={40}
                alt={user.SenderName}
              />
              <h3 className="font-medium text-gray-800">{user.SenderName}</h3>
            </div>
            <h3 className="text-gray-600 w-[120px]">{user.Category}</h3>
            <h3 className="text-gray-600">{user.TransDate}</h3>
            <h3 className="font-semibold text-gray-800">{user.Amount}$</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-[48px]">
        <button
          type="button"
          className="w-[94px] h-[40px] border-gray-300 rounded-md border-[1px] hover:bg-stone-500 transition duration-300 "
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
        <button className="w-[94px] h-[40px] border-gray-300 rounded-md border-[1px] hover:bg-stone-500 transition duration-300">
          Next
        </button>
      </div>
    </>
  );
}
