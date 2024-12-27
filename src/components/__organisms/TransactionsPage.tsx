'use client';
import React, { useState } from 'react';
import Pagination from '@/components/__molecules/Pagination';
import Image from 'next/image';
import { Category, Sort } from '@/utility/images/ImgExport';
type SortType = 'A' | 'Z' | 'High' | 'Low' | 'Latest';
export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<SortType>('Latest');
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const toggleSortVisibility = () => {
    setIsSortVisible((prev) => !prev);
  };
  const toggleCategoryVisibility = () => {
    setIsCategoryVisible((prev) => !prev);
  };

  return (
    <div className='p-8 w-full overflow-x-hidden overflow-scroll h-screen '>
      <div className='mx-auto sm:mb-10 lg:mb-[0px]'>
        <h2 className='font-publicSans font-bold text-4xl text-[#201F24] mb-6'>
          Transactions
        </h2>

        <div className='bg-white p-8 rounded-lg shadow-lg mt-6'>
          <div className='flex justify-between mb-6 items-center'>
            <div className='flex-1 md:max-w-[320px]'>
              <input
                type='text'
                className='border border-gray-300 rounded-md p-3  h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%] md:min-w-[195px]  '
                placeholder='Search transaction'
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='flex gap-6 items-center'>
              <div>
                <label
                  htmlFor='sortBy'
                  className='text-sm font-medium text-gray-700 sm:hidden md:flex'
                >
                  Sort By
                </label>
                <Image
                  src={Sort}
                  width={15}
                  height={15}
                  alt='sortButton'
                  className=' ml-5 sm:flex md:hidden cursor-pointer'
                  onClick={toggleSortVisibility}
                ></Image>
                {isSortVisible && (
                  <div className=' md:hidden absolute mt-2 bg-white shadow-md border rounded-md'>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setSort('Latest')}
                    >
                      Latest
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setSort('A')}
                    >
                      A to Z
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setSort('Z')}
                    >
                      Z to A
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setSort('High')}
                    >
                      Highest
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setSort('Low')}
                    >
                      Lowest
                    </div>
                  </div>
                )}
                <select
                  onChange={(e) => setSort(e.target.value as SortType)}
                  name='price'
                  id='price'
                  className=' sm:hidden md:flex w-32 h-12 border border-gray-300 rounded-md mt-2 text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[8px]'
                >
                  <option value='Latest'>Latest</option>
                  <option value='A'>A to Z</option>
                  <option value='Z'>Z to A</option>
                  <option value='High'>Highest</option>
                  <option value='Low'>Lowest</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='category'
                  className='text-sm font-medium text-gray-700 sm:hidden md:flex'
                >
                  Category
                </label>
                <Image
                  src={Category}
                  width={15}
                  height={15}
                  alt='sortButton'
                  className='sm:flex md:hidden cursor-pointer mr-5'
                  onClick={toggleCategoryVisibility}
                ></Image>
                {isCategoryVisible && (
                  <div className='md:hidden absolute mt-2 bg-white shadow-md border rounded-md'>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Entertainment')}
                    >
                      Entertainment
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Bills')}
                    >
                      Bills
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Groceries')}
                    >
                      Groceries
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Dining Out')}
                    >
                      Dining Out
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Transportation')}
                    >
                      Transportation
                    </div>
                    <div
                      className='p-2 cursor-pointer hover:bg-gray-100'
                      onClick={() => setCategory('Personal')}
                    >
                      Personal Care
                    </div>
                  </div>
                )}
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  name='Category'
                  id='Category'
                  className=' sm:hidden md:flex w-40 h-12 border border-gray-300 rounded-md mt-2 text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[8px]'
                >
                  <option value=''>All Transaction</option>
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Bills'>Bills</option>
                  <option value='Groceries'>Groceries</option>
                  <option value='Dining Out'>Dining Out</option>
                  <option value='Transportation'>Transportation</option>
                  <option value='Personal'>Personal Care</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex justify-between py-4 px-6 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-4 mb-6 sm:hidden md:flex'>
            <h3 className='md:w-[240px] lg:w-[428px]'>Recipient / Sender</h3>
            <h3 className='w-[120px]'>Category</h3>
            <h3>Transaction Date</h3>
            <h3>Amount</h3>
          </div>
          <Pagination search={search} sort={sort} category={category} />
        </div>
      </div>
    </div>
  );
}
