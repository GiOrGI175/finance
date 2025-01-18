"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next"; 
import { userIcon } from "@/utility/images/ImgExport";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function OverViewBalances() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter(); 

  const getCurrentUser = async (token: string) => {
    try {
      const res = await axios.get(
        "https://finance-back-heee.onrender.com/auth/current-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = getCookie("auth_token");
    if (token) {
      getCurrentUser(token as string);
    } else {
      setLoading(false);
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
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found. Please log in.</div>;
  }

  return (
    <>
      <div className="m-auto">
        <div className="flex justify-between mb-6">
          <h2 className="font-publicSans font-bold text-4xl text-[#201F24] ">
            Overview
          </h2>
          <div className="flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <Image
              src={userIcon}
              width={30}
              height={30}
              alt="Picture of the author"
              className="mr-2"
            />
            <h2>{user.fullName}</h2>
          </div>
        </div>
        <div className="flex sm:flex-col md:!flex-row justify-between md:space-x-4 sm:gap-[12px] md:gap-0">
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
              <h5 className="text-[14px] font-normal text-[#696868]">Expenses</h5>
              <h3 className="text-[32px] font-bold leading-8 text-[#201F24] mt-[12px]">
                $1,700.50
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Are you sure you want to log out?</h3>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
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