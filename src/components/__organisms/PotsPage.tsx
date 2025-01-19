"use client";

import { colorOptions, Potss } from "@/commons/hooks/PotsData";
import Image from "next/image";
import AddNewPot from "../__atoms/AddNewPot";
import CreatePot from "../__molecules/CreatePot";
import PotSettings from "../__atoms/PotSettings";
import EditPot from "../__molecules/EditPot";
import DeletePot from "../__molecules/DeletePot";
import MoneyTransferBtn from "../__atoms/MoneyTransferBtn";
import WithdrawPot from "../__molecules/WithdrawPot";
import AddMoneyPot from "../__molecules/AddMoneyPot";
import { useEffect, useState } from "react";
import axiosInstance from "@/commons/hooks/lib/axiosInstance";
import { motion } from "framer-motion";

type PotT = {
  _id: string;
  potName: string;
  procent: number;
  Target: number;
  theme: string;
  __v: number;
  Amount: number;
};

export type FormType = {
  potName: string;
  Target: number;
  theme: string;
};

const PotsPage = () => {
  const [potsData, setPostsData] = useState<PotT[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [potID, setPotID] = useState<string>("");
  const [form, setForm] = useState<FormType>({
    potName: "",
    Target: 0,
    theme: "",
  });
  const [showChoseInput, setChoseInput] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/pots");
      setPostsData(res.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getColorByTheme = (theme: string): string => {
    const color = colorOptions.find(
      (option) => option.value.toLowerCase() === theme.toLowerCase()
    );
    return color ? color.color : "#000";
  };

  if (loading) {
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <span className="font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]">
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <span className="font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]">
          Error: {error}
        </span>
      </div>
    );
  }

  // if (potsData.length === 0) {
  //   return (
  //     <div className='w-full h-[100dvh] flex justify-center items-center'>
  //       <span className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
  //         No pots available. Please add a new pot.
  //       </span>
  //     </div>
  //   );
  // }
  const itemVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -100 : 100,  
    }),
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,  
      transition: { duration: 1, delay: custom * 0.3 },
    }),
  };

  return (
    <div className="w-full overflow-x-hidden overflow-scroll h-screen py-[40px]  px-[40px] bg-[#F8F4F0] max-sm:px-[16px] max-sm:py-[24px]">
      <div className="w-full mb-[32px] flex justify-between">
        <motion.h2
          className="font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{
            once: true,
          }}
        >
          Pots
        </motion.h2>
        <>
          <AddNewPot />
        </>
      </div>
      <motion.div
        className="w-full flex flex-wrap justify-center gap-[24px]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {potsData.map((item, index) => (
          <motion.div
            variants={itemVariants} 
            custom={index}
            key={item._id}
            className="basis-[518px]  grow w-full h-[303px] rounded-[12px] flex flex-col justify-between p-[24px] bg-white max-sm:p-[20px]"
          >
            <div className="flex justify-between mb-[32px]">
              <div className="flex items-center">
                <div
                  className="w-[16px] h-[16px] rounded-full"
                  style={{
                    backgroundColor: getColorByTheme(item.theme),
                  }}
                />
                <span className="ml-[16px] font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]">
                  {item.potName}
                </span>
              </div>
              <>
                <PotSettings
                  index={index}
                  setPotID={setPotID}
                  itemID={item._id}
                  setError={setError}
                  setForm={setForm}
                  setChoseInput={setChoseInput}
                />
              </>
            </div>
            <div className="flex flex-col justify-between mb-[32px]">
              <div className="flex justify-between items-center mb-[16px]">
                <div>
                  <span className="font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]">
                    Total Saved
                  </span>
                </div>
                <div>
                  <span className="font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]">
                    ${item.Amount}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="w-full h-[8px] rounded-[8px] bg-[#F8F4F0] ">
                  <div
                    style={{
                      width: `${item.procent}%`,
                      backgroundColor: getColorByTheme(item.theme),
                    }}
                    className="h-full rounded-[8px]"
                  />
                </div>
                <div className="flex justify-between mt-[13px]">
                  <div>
                    <span className="font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]">
                      {item.procent}%
                    </span>
                  </div>
                  <div>
                    <span className="font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]">
                      Target pf ${item.Target}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <>
              <MoneyTransferBtn setPotID={setPotID} itemID={item._id} />
            </>
          </motion.div>
        ))}
      </motion.div>
      <>
        <CreatePot fetchData={fetchData} setError={setError} />

        <EditPot
          fetchData={fetchData}
          potID={potID}
          setError={setError}
          form={form}
          setForm={setForm}
          showChoseInput={showChoseInput}
        />

        <DeletePot fetchData={fetchData} potID={potID} setError={setError} />

        <WithdrawPot fetchData={fetchData} potID={potID} setError={setError} />

        <AddMoneyPot fetchData={fetchData} potID={potID} setError={setError} />
      </>
    </div>
  );
};

export default PotsPage;
