import React from "react";

export default function OverViewBalances() {
  return (
    <>
      <div className="m-auto">
        <h2 className="font-publicSans font-bold text-4xl text-[#201F24] mb-6">
          Overview
        </h2>
        <div className=" flex  sm:flex-col md:!flex-row justify-between md:space-x-4 sm:gap-[12px] md:gap-0">
          <div className="bg-[#201F24] p-[24px] rounded-xl flex-1">
            <div>
              <h5 className="text-[14px] font-normal text-[#FFFFFF]">
                Current Balance
              </h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#FFFFFF] mt-[12px]">
                $4,836.00
              </h3>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-[24px] rounded-xl flex-1">
            <div>
              <h5 className="text-[14px] font-normal text-[#696868]">Income</h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                $3,814.25
              </h3>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-[24px] rounded-xl flex-1">
            <div>
              <h5 className="text-[14px] font-normal text-[#696868]">
                Expenses
              </h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                $1,700.50
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
