"use client";

import React, { useState, useEffect } from "react";
import { NoteRe, Search } from "@/utility/images/ImgExport";
import Image from "next/image";
import SubscriptionList from "../__atoms/SubscriptionList";
import AddNewBill from "../__atoms/AddNewBill";
import BillPopUp from "../__molecules/BillPopUp";
import { motion } from "framer-motion";

export default function RecurringBills() {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const [show, setShow] = useState(false);
  const [bills, setBills] = useState<any[]>([]);
  let totalBills = 0;
  let amountSpent = 0;
  let totalUpcoming = 0;
  let dueSoon = 0;
  bills.forEach((el) => {
    totalBills += el.amount;
    if (el.status == "paid") {
      amountSpent += el.amount;
    }
    if (el.status == "none") {
      totalUpcoming += el.amount;
    }
    if ((el.status = "unpaid")) {
      dueSoon += el.amount;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://finance-back-heee.onrender.com/bills"
        );
        const data = await response.json();
        setBills(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickShow = () => {
    setShow(true);
  };

  const handleClickHide = () => {
    setShow(false);
  };

  const addBill = (newBill: any) => {
    setBills((prevBills) => [...prevBills, newBill]);
  };

  return (
    <div className="w-full overflow-x-hidden overflow-scroll h-screen py-[24px] px-[16px] sm:pt-[32px] sm:pb-[100px] sm:px-[32px] bg-[#F8F4F0]">
      <div className="w-full mb-[32px] flex sm:flex-row flex-col gap-y-[10px] justify-between">
        <motion.h2
          className="text-[32px] font-bold text-gray-900"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{
            once: true,
          }}
        >
          Recurring Bills
        </motion.h2>
        <AddNewBill handleClickShow={handleClickShow} />
      </div>
      <div className="w-full flex flex-col gap-[24px] sm:flex-col md:flex-row">
        <div className="flex flex-col md:flex-col gap-y-[24px] max-w-[337px] sm:max-w-none md:max-w-[337px] sm:gap-x-[24px] w-full">
          <motion.div
            className="p-[24px] sm:flex-[1] md:flex-none h-[190px] bg-gray-900 rounded-[12px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{
              once: true,
            }}
          >
            <div className="mb-[32px]">
              <Image src={NoteRe} width={40} height={40} alt="" />
            </div>
            <div className="h-[70px] flex flex-col justify-between">
              <span className="text-[14px] text-white">Total Bills</span>
              <span className="text-[32px] text-white font-bold">
                ${totalBills}
              </span>
            </div>
          </motion.div>
          <motion.div
            className="bg-white sm:flex-[1] md:flex-none h-[190px] rounded-[12px] p-[20px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{
              once: true,
            }}
          >
            <h5 className="text-[16px] text-gray-900 font-bold mb-[20px]">
              Summary
            </h5>
            <div className="flex justify-between items-start h-[35px] border-b-[1px] border-b-[#696868] border-opacity-[15%] text-[12px]">
              <span>Amount Spent</span>
              <span className="font-bold text-gray-900">{amountSpent}</span>
            </div>
            <div className="flex justify-between items-center h-[35px] border-b-[1px] border-b-[#696868] border-opacity-[15%] text-[12px]">
              <span>Total Upcoming</span>
              <span className="font-bold text-gray-900">{totalUpcoming}</span>
            </div>
            <div className="flex justify-between items-center h-[35px] border-b-[1px] border-b-[#696868] border-opacity-[15%] text-[12px]">
              <span>Due Soon</span>
              <span className="font-bold text-gray-900">{dueSoon}</span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-full  rounded-[12px] p-[32px] bg-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex justify-between gap-x-[10px] mb-[20px]">
            <div className="w-full">
              <input
                className="w-full h-[46px] pl-[5px] text-[14px] border-[1px] border-[#D4D4D4] rounded-[6px] outline-none"
                placeholder="Search bills"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="sm:flex max-w-[252px]  hidden items-center  justify-between ">
              <span className="text-[14px] text-gray-500 font-bold hidden">
                Sort By
              </span>
              <select
                className="sm:px-[20px] sm:py-[8px] border-gray-400 border-2 rounded-[8px]"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
                name="cars"
                id="cars"
              >
                <option value="" disabled>
                  Sort By
                </option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="hidden sm:flex justify-between text-[14px] ">
            <div className="max-w-[319px] w-full">
              <span>Bill Title</span>
            </div>
            <div className="max-w-[252px] w-full flex justify-between gap-[10px]">
              <div className="max-w-[120px] w-full ">
                <span>Due Date</span>
              </div>
              <div className="max-w-[100px] w-full">
                <span>Amount</span>
              </div>
            </div>
          </div>
          <div>
            <SubscriptionList
              inputValue={value}
              option={option}
              bills={bills}
            />
          </div>
        </motion.div>
      </div>

      {show && <BillPopUp setShow={setShow} addBill={addBill} />}
    </div>
  );
}
