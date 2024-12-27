"use client"
import React, { useReducer } from "react";

import { useRouter } from "next/navigation";

export default function BudgetAndBills() {
  const router = useRouter()
  const handleClickBills = () =>{
    router.push("/Recurring-bills")
  }
  return (
    <>
      <div className="mt-8 flex flex-col w-full space-y-6 ">
        <div className="bg-[#FFFFFF] p-[32px] rounded-xl flex-1"></div>
        <div className="bg-[#FFFFFF] p-[32px] rounded-xl flex-1 flex flex-col justify-around">
          <div className="flex justify-between">
            <h5 className="text-[#201F24] text-[20px] font-bold leading-6">
              Recurring Bills
            </h5>
            <button className="text-[#696868] font-normal" onClick={handleClickBills}>See Details</button>
          </div>
          <div className="flex flex-col gap-[30px] ">
            <div className="flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#277C78] rounded-lg h-[61px] pl-[16px] pr-[16px]">
              <h5 className="text-[#696868] text-[20px] font-normal leading-6">
                Paid Bills
              </h5>
              <h5 className="font-bold text-[#201F24]">$190.00</h5>
            </div>
            <div className="flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#F2CDAC] rounded-lg h-[61px] pl-[16px] pr-[16px]">
              <h5 className="text-[#696868] text-[20px] font-normal leading-6">
              Total Upcoming
              </h5>
              <h5 className="font-bold text-[#201F24]">$194.98</h5>
            </div>
            <div className="flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#82C9D7] rounded-lg h-[61px] pl-[16px] pr-[16px]">
              <h5 className="text-[#696868] text-[20px] font-normal leading-6">
              Due Soon
              </h5>
              <h5 className="font-bold text-[#201F24]">$59.98</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
