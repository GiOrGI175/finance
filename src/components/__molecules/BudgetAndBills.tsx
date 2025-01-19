'use client';
import React, { useReducer } from 'react';

import { useRouter } from 'next/navigation';
import { BudgetChart } from './BudgetChart';
import { BudgetView } from '@/commons/hooks/BudgetData';
import { BudgetChart2 } from './BudgetCart2';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';
import { budgetsT } from '../__organisms/BudgetPage';
import { colorOptions } from '@/commons/hooks/PotsData';

export default function BudgetAndBills() {
  const [budgetsData, setBudgetsData] = React.useState<budgetsT[]>([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();
  const handleClickBills = () => {
    router.push('/Recurring-bills');
  };

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get('/budgets');
      setBudgetsData(res.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const getColorByTheme = (theme: string): string => {
    const color = colorOptions.find(
      (option) => option.value.toLowerCase() === theme.toLowerCase()
    );
    return color ? color.color : '#000';
  };

  return (
    <div className='grow basis-[428px]'>
      <div className='mt-8 flex flex-col w-full space-y-6 '>
        <div className='bg-[#FFFFFF] p-[32px] md:h-[410px] h-[466px] rounded-xl flex-1'>
          <div className='flex justify-between mb-[51px]'>
            <h5 className='text-[#201F24] text-[20px] font-bold leading-6'>
              Budgets
            </h5>
            <button
              className='text-[#696868] font-normal'
              onClick={handleClickBills}
            >
              See Details
            </button>
          </div>
          <div className='flex flex-col w-full h-full justify-start items-center md:flex-row'>
            <div className='flex-[0.7] flex justify-center mb-[16px]'>
              <div className='relative w-[357px] flex justify-center '>
                <BudgetChart2 budgetsData={budgetsData} />
                {/* <div className='absolute  md:left-[135px] top-[45px] left-[135px] transform -translate-x-1/2 w-[155px] h-[155px] rounded-full shadow-[0_0_0px_15px_rgba(225,225,225,0.5)] z-10' /> */}
              </div>
            </div>
            <div className='ml-[16px] flex-[0.3]  flex justify-center items-center flex-wrap max-w-[303px] w-full '>
              {budgetsData.map((item) => (
                <div
                  key={item._id}
                  className='mb-[33px] w-full  flex  max-w-[143px]  '
                >
                  <div className=' flex items-center'>
                    <div
                      className='w-[4px] h-[43px] rounded-[8px] mr-[16px] '
                      style={{
                        backgroundColor: getColorByTheme(item.theme),
                      }}
                    />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p className='font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                      {item.budgetName}
                    </p>
                    <span className='font-publicSans font-bold text-[16px] leading-[24px] text-[#201F24]'>
                      ${item.Spent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bg-[#FFFFFF] p-[32px] rounded-xl flex-1 flex flex-col justify-around'>
          <div className='flex justify-between'>
            <h5 className='text-[#201F24] text-[20px] font-bold leading-6'>
              Recurring Bills
            </h5>
            <button
              className='text-[#696868] font-normal'
              onClick={handleClickBills}
            >
              See Details
            </button>
          </div>
          <div className='flex flex-col gap-[30px] '>
            <div className='flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#277C78] rounded-lg h-[61px] pl-[16px] pr-[16px]'>
              <h5 className='text-[#696868] text-[20px] font-normal leading-6'>
                Paid Bills
              </h5>
              <h5 className='font-bold text-[#201F24]'>$190.00</h5>
            </div>
            <div className='flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#F2CDAC] rounded-lg h-[61px] pl-[16px] pr-[16px]'>
              <h5 className='text-[#696868] text-[20px] font-normal leading-6'>
                Total Upcoming
              </h5>
              <h5 className='font-bold text-[#201F24]'>$194.98</h5>
            </div>
            <div className='flex justify-between items-center bg-[#F8F4F0] border-l-4 border-[#82C9D7] rounded-lg h-[61px] pl-[16px] pr-[16px]'>
              <h5 className='text-[#696868] text-[20px] font-normal leading-6'>
                Due Soon
              </h5>
              <h5 className='font-bold text-[#201F24]'>$59.98</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
