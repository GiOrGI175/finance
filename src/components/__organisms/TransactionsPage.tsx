"use client";
import React from "react";
import usersData from "@/commons/hooks/UsersData";
import Image from "next/image";

export default function TransactionsPage() {
  return (
    <div className="p-8 ">
      <div className=" mx-auto">
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
              />
            </div>
            <div className="flex gap-6 items-center">
              <div>
                <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                  Sort By
                </label>
                <select
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
                <label htmlFor="category" className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="Category"
                  id="Category"
                  className="w-40 h-12 border border-gray-300 rounded-md mt-2 text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[8px]"
                >
                  <option value="">All Transaction</option>
                  <option value="A">Entertainment</option>
                  <option value="Z">Bills</option>
                  <option value="">Groceries</option>
                  <option value="">Dining Out</option>
                  <option value="">Transportation</option>
                  <option value="">Personal Care</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-4 mb-6">
            <div>Recipient / Sender</div>
            <div>Category</div>
            <div>Transaction Date</div>
            <div>Amount</div>
          </div>

          <div className="space-y-6">
            {usersData.map((user, index) => (
              <div key={index} className="flex justify-between items-center py-4 px-6 bg-white shadow-sm rounded-lg hover:bg-gray-50 transition ease-in-out">
                <div className="flex items-center space-x-3">
                  <Image
                    src={user.Image}
                    width={40}
                    height={40}
                    // alt={user.SenderName}
                    
                  />
                  <h3 className="font-medium text-gray-800">{user.SenderName}</h3>
                </div>
                <div className="text-gray-600">{user.Category}</div>
                <div className="text-gray-600">{user.TransDate}</div>
                <div className="font-semibold text-gray-800">{user.Amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
