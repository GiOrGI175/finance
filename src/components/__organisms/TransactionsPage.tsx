"use client";
import React, { useState } from "react";
import Pagination from "@/components/__molecules/Pagination";

export default function TransactionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("Latest");
  console.log(category)
  console.log(sort)
  return (
    <div className="p-8">
      <div className="mx-auto">
        <h2 className="font-publicSans font-bold text-4xl text-[#201F24] mb-6">
          Transactions
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
          <div className="flex justify-between mb-6">
            <div className="flex-1">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-3 w-full sm:w-96 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search transaction"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <label
                  htmlFor="sortBy"
                  className="text-sm font-medium text-gray-700"
                >
                  Sort By
                </label>
                <select
                  onChange={(e) => setSort(e.target.value)}
                  name="price"
                  id="price"
                  className="w-32 h-12 border border-gray-300 rounded-md mt-2 text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[8px]"
                >
                  <option value="Latest">Latest</option>
                  <option value="A">A to Z</option>
                  <option value="Z">Z to A</option>
                  <option value="High">Highest</option>
                  <option value="Low">Lowest</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  name="Category"
                  id="Category"
                  className="w-40 h-12 border border-gray-300 rounded-md mt-2 text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[8px]"
                >
                  <option value="">All Transaction</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Bills">Bills</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Dining Out">Dining Out</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Personal">Personal Care</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between py-4 px-6 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-4 mb-6">
            <h3 className="w-[428px]">Recipient / Sender</h3>
            <h3 className="w-[120px]">Category</h3>
            <h3>Transaction Date</h3>
            <h3>Amount</h3>
          </div>
          <Pagination search={search}  sort={sort} category={category} />
        </div>
      </div>
    </div>
  );
}
