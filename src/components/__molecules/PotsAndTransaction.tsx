"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Money, transactions, userIcon } from "@/utility/images/ImgExport";
import usersData from "@/commons/hooks/UsersData";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

export default function PotsAndTransaction() {
  type Transaction = {
    id: string; 
    RecipientOrSender: string;
    Amount: number;
    TransactionDate: string; 
  };
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    axios
      .get("https://finance-back-heee.onrender.com/transactions/transaction")
      .then((response) => {
        const filteredData = response.data.slice(0, 5);
        setTransactions(filteredData); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  



  const router = useRouter();

  const handleClickPots = () => {
    router.push("/Pots");
  };
  const handleClickTransaction = () => {
    router.push("/Transactions");
  };

  return (
    <div className="grow basis-[608px] mt-8">
      <motion.div
        className="bg-[#FFFFFF] p-[32px] rounded-xl flex-1"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{
          once: true,
        }}
      >
        <div className="flex justify-between">
          <h5 className="text-[#201F24] text-[20px] font-bold leading-6">
            Pots
          </h5>
          <button
            className="text-[#696868] font-normal"
            onClick={handleClickPots}
          >
            See Details
          </button>
        </div>
        <div className="flex md:space-x-6 mt-[20px] sm:flex-col md:flex-row">
          <div className="flex-1 bg-[#F8F4F0] h-[110px] rounded-xl flex items-center ">
            <Image
              src={Money}
              width={27}
              height={34}
              alt="money"
              className="ml-[16px]"
            />
            <div className="ml-[16px]">
              <h5 className="text-[14px] font-normal text-[#696868]">
                Total Saved
              </h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                $850
              </h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between h-[110px] rounded-xl sm:mt-5 md:mt-0">
            <div className="flex">
              <div className="border-l-[8px] border-[#277C78] h-[43px] flex-1 rounded-l-lg">
                <h5 className="text-[14px] font-normal text-[#696868] ml-[20px]">
                  Savings
                </h5>
                <h5 className="ml-[20px]">$159</h5>
              </div>
              <div className="border-l-[8px] border-[#82C9D7] h-[43px] flex-1 ml-[20px] rounded-l-lg">
                <h5 className="text-[14px] font-normal text-[#696868] ml-[20px]">
                  Gift
                </h5>
                <h5 className="ml-[20px]">$40</h5>
              </div>
            </div>
            <div className="flex sm:mt-4 md:mt-0">
              <div className="border-l-[8px] border-[#626070] h-[43px] flex-1 rounded-l-lg">
                <h5 className="text-[14px] font-normal text-[#696868] ml-[20px]">
                  Concert Ticket
                </h5>
                <h5 className="ml-[20px]">$110</h5>
              </div>
              <div className="border-l-[8px] border-[#F2CDAC] h-[43px] flex-1 ml-[20px] rounded-l-lg">
                <h5 className="text-[14px] font-normal text-[#696868] ml-[20px]">
                  New Laptop
                </h5>
                <h5 className="ml-[20px]">$10</h5>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="bg-[#FFFFFF] p-[32px] rounded-xl flex-1 mt-[24px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        viewport={{
          once: true,
        }}
      >
        <div className="flex justify-between ">
          <h5 className="text-[#201F24] text-[20px] font-bold leading-6">
            Transactions
          </h5>
          <button
            className="text-[#696868] font-normal"
            onClick={handleClickTransaction}
          >
            View All
          </button>
        </div>
        <div className="mt-[35px] flex flex-col gap-[20px]">
          {transactions.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 md:px-6 bg-white shadow-sm rounded-lg hover:bg-gray-50 transition ease-in-out"
            >
              <div className="flex items-center space-x-3  md:w-[240px] lg:w-[428px]  ">
              <Image
                    src={userIcon}
                    width={25}
                    height={25}
                    alt="User"
                  ></Image>

                <h3 className="font-medium text-gray-800">{user.RecipientOrSender}</h3>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{user.Amount}$</h3>
                <h3 className="text-gray-600 ">{new Date(user.TransactionDate)
                    .toISOString()
                    .split("T")[0]}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
