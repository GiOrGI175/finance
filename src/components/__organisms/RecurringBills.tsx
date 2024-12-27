"use client";

import React, { useState } from "react";
import { NoteRe, Search } from "@/utility/images/ImgExport";
import Image from "next/image";
import SubscriptionList from "../__atoms/SubscriptionList";

export default function RecurringBills() {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");

  return (
    <div className="w-full overflow-x-hidden  overflow-scroll h-screen py-[24px] px-[16px] sm:pt-[32px] sm:pb-[100px] sm:px-[32px] bg-[#F8F4F0] ">
      <div className="w-full mb-[32px]">
        <h2 className="text-[32px] font-bold text-gray-900">Recurring Bills</h2>
      </div>
      <div className="w-full flex flex-col gap-[24px] sm:flex-col md:flex-row">
        <div className="flex flex-col  md:flex-col gap-y-[24px] max-w-[337px] sm:max-w-none md:max-w-[337px] sm:gap-x-[24px] w-full">
          {/* zeda */}
          <div className="p-[24px] sm:flex-[1] md:flex-none h-[190px] bg-gray-900 rounded-[12px]">
            <div className="mb-[32px]">
              <Image src={NoteRe} width={40} height={40} alt="" />
            </div>
            <div className="h-[70px] flex flex-col justify-between">
              <span className="text-[14px] text-white">Total Bills</span>
              <span className="text-[32px] text-white font-bold">$384.98</span>
            </div>
          </div>
          {/* qveda */}
          <div className="bg-white sm:flex-[1] md:flex-none h-[190px] rounded-[12px] p-[20px]">
            <h5 className="text-[16px] text-gray-900 font-bold mb-[20px]">
              Summary
            </h5>
            <div className="flex justify-between items-start h-[35px] border-b-[1px] border-b-[#696868] border-opacity-[15%] text-[12px]">
              <span className="text-gray-500">Paid Bills</span>
              <span>4 $190.00</span>
            </div>
            <div className="flex justify-between h-[35px] items-center border-b-[1px] border-b-[#696868] border-opacity-[15%] text-[12px]">
              <span className="text-gray-500">Total Upcoming</span>
              <span>4 $190.00</span>
            </div>
            <div className="flex justify-between h-[35px] items-end border-b-[1px] border-b-[#696868] border-opacity-[15%] text-red-600 text-[12px]">
              <span className="text-gray-500">Due Soon</span>
              <span>4 $190.00</span>
            </div>
          </div>
        </div>

        {/* se */}
        <div className="w-full min-h-[742px] bg-white p-[32px] rounded-[12px]">
          <div className="flex justify-between gap-x-[10px]">
            <div className="max-w-[320px] w-full relative">
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue(e.target.value);
                }}
                placeholder="Search bills"
                className="w-full pr-[52px] h-[45px] pl-[20px] rounded-[8px] border-[1px] border-gray-500 text-[14px] text-gray-500"
              />
              <Image
                className="absolute top-[15px] right-[20px]"
                src={Search}
                alt=""
              />
            </div>
            <div className="sm:flex max-w-[170px] hidden items-center w-full justify-between ">
              <span className="text-[14px] text-gray-500 font-bold">
                Sort By
              </span>
              <select
                onChange={(e) => {
                  setOption(e.target.value);
                }}
                name="cars"
                id="cars"
              >
                <option value="Leatest">Leatest</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
          </div>
          <div className="mt-[36px]  ">
            <div className="sm:flex justify-between hidden text-gray-500 text-[12px] border-b-[1px] border-gray-500 border-opacity-[15%] w-full py-[12px]">
              <span className="max-w-[319px] w-full">Bill Title</span>
              <div className="max-w-[252px] w-full flex justify-between">
                <span className="max-w-[120px] w-full">Due Date</span>
                <span className="max-w-[100px] w-full">Amount</span>
              </div>
            </div>
            <SubscriptionList inputValue={value} option={option} />
          </div>
        </div>
      </div>
    </div>
  );
}
