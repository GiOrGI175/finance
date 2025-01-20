"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { userIcon } from "@/utility/images/ImgExport";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { motion } from "framer-motion";

export default function OverViewBalances() {
  const [user, setUser] = useState<any>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [remainingBalance, setRemainingBalance] = useState<number | null>(null);

  const router = useRouter();
  
  
  const getCurrentUser = async (token: string) => {
    try {
      setIsLoading(true); 
      const res1 = axios.get("https://finance-back-heee.onrender.com/transactions/transaction")
      const res = await axios.get(
        "https://finance-back-heee.onrender.com/auth/current-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log((await res1).data)
      const newData = (await res1).data.map((transaction:any)=>transaction.Amount)
      console.log(newData)
      const totalAmount = newData.reduce((sum: number, amount: number) => sum + amount, 0);
      let initialBalance = 9597.25
      

      const calculatedRemainingBalance = initialBalance - totalAmount;

      
      setRemainingBalance(calculatedRemainingBalance);
    
      console.log('Total Amount:', totalAmount);
      
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    const token = getCookie("auth_token");
    if (token) {
      getCurrentUser(token as string);
    } else {
      setIsLoading(false); 
    }
  }, []);

  const handleLogout = () => {
    deleteCookie("auth_token");
    deleteCookie("auth_name");
    router.push("/AuthLogin");
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClick2 = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Spinner />; 
  }

  if (!user) {
    return <div>User not found. Please log in.</div>;
  }
  
  return (
    <>
      <motion.div className="m-auto">
        <motion.div className="flex justify-between mb-6">
          <motion.h2
            className="font-publicSans font-bold text-4xl text-[#201F24] "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{
              once: true,
            }}
          >
            Overview
          </motion.h2>
          <motion.div
            className="flex items-center justify-center cursor-pointer"
            onClick={handleClick}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src={userIcon}
              width={30}
              height={30}
              alt="Picture of the author"
              className="mr-2"
            />
            <h2>{user.fullName}</h2>
          </motion.div>
        </motion.div>
        <div className="flex sm:flex-col md:!flex-row justify-between md:space-x-4 sm:gap-[12px] md:gap-0">
          <motion.div
            className="bg-[#201F24] p-[24px] rounded-xl flex-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{
              once: true,
            }}
          >
            <div>
              <h5 className="text-[14px] font-normal text-[#FFFFFF]">
                Balance
              </h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#FFFFFF] mt-[12px]">
                ${remainingBalance}
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#FFFFFF] p-[24px] rounded-xl flex-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <div>
              <h5 className="text-[14px] font-normal text-[#696868]">Income</h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                ${user.income}
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#FFFFFF] p-[24px] rounded-xl flex-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{
              once: true,
            }}
          >
            <div>
              <h5 className="text-[14px] font-normal text-[#696868]">
                Expenses
              </h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                ${user.expenses}
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 min-w-[211px]">
            <h3 className="  text-xl font-semibold ">
              Are you sure you want to log out?
            </h3>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleLogout}
                className="px-4 py-2 mr-2 bg-red-600 text-white rounded-md"
              >
                Yes, Logout
              </button>
              <button
                onClick={handleClick2}
                className="px-4 py-2 bg-gray-200 text-black rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
