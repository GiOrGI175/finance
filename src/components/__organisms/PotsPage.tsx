'use client';

import { Potss } from '@/commons/hooks/PotsData';
import Image from 'next/image';
import AddNewPot from '../__atoms/AddNewPot';
import CreatePot from '../__molecules/CreatePot';
import PotSettings from '../__atoms/PotSettings';
import EditPot from '../__molecules/EditPot';
import DeletePot from '../__molecules/DeletePot';
import MoneyTransferBtn from '../__atoms/MoneyTransferBtn';
import WithdrawPot from '../__molecules/WithdrawPot';
import AddMoneyPot from '../__molecules/AddMoneyPot';
import { useEffect, useState } from 'react';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type PotT = {
  _id: string;
  potName: string;
  Target: number;
  theme: string;
  __v: number;
  Amount: number;
};

const PotsPage = () => {
  const [potsData, setPostsData] = useState<PotT[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get('/pots');
      setPostsData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-full overflow-x-hidden overflow-scroll h-screen py-[40px]  px-[40px] bg-[#F8F4F0] max-sm:px-[16px] max-sm:py-[24px]'>
      <div className='w-full mb-[32px] flex justify-between'>
        <h2 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Pots
        </h2>
        <>
          <AddNewPot />
        </>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-[24px]'>
        {potsData.map((item, index) => (
          <div
            key={item._id}
            className='basis-[518px]  grow w-full h-[303px] rounded-[12px] flex flex-col justify-between p-[24px] bg-white max-sm:p-[20px]'
          >
            <div className='flex justify-between mb-[32px]'>
              <div className='flex'>
                <Image src={item.icon} width={16} height={16} alt='icon' />
                <span className='ml-[16px] font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]'>
                  {item.potName}
                </span>
              </div>
              <>
                <PotSettings index={index} />
              </>
            </div>
            <div className='flex flex-col justify-between mb-[32px]'>
              <div className='flex justify-between items-center mb-[16px]'>
                <div>
                  <span className='font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                    Total Saved
                  </span>
                </div>
                <div>
                  <span className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
                    ${item.Amount}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='w-full h-[8px] rounded-[8px] bg-[#F8F4F0] '>
                  <div
                    style={{
                      width: `${item.procent}%`,
                      backgroundColor: item.color,
                    }}
                    className='h-full rounded-[8px]'
                  />
                </div>
                <div className='flex justify-between mt-[13px]'>
                  <div>
                    <span className='font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
                      {item.procent}%
                    </span>
                  </div>
                  <div>
                    <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                      Target pf ${item.Target}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <>
              <MoneyTransferBtn />
            </>
          </div>
        ))}
      </div>
      <>
        <CreatePot />

        <EditPot />

        <DeletePot />

        <WithdrawPot />

        <AddMoneyPot />
      </>
    </div>
  );
};

export default PotsPage;
