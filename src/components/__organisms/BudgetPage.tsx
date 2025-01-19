'use client';

import AddNewBudget from '../__atoms/AddNewBudget';
import { BudgetView } from '@/commons/hooks/BudgetData';
import Image from 'next/image';
import { arrowR } from '@/utility/images/ImgExport';
import Link from 'next/link';
import BudgetSetting from '../__atoms/BudgetSetting';
import CreateBudget from '../__molecules/CreateBudget';
import EditBudget from '../__molecules/EditBudget';
import DeleteBudget from '../__molecules/DeleteBudget';
import { BudgetChart } from '../__molecules/BudgetChart';
import { useEffect, useState } from 'react';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';
import { colorOptions } from '@/commons/hooks/PotsData';

type TransactionT = {
  _id: string;
  RecipientOrSender: string;
  category: string;
  TransactionDate: string;
  Amount: number;
  __v: number;
};

type budgetsT = {
  _id: string;
  budgetName: string;
  Target: number;
  theme: string;
  __v: number;
  procent: number;
  Spent: number;
  Remaining: number;
  transactions: TransactionT[];
};

export type FormType2 = {
  budgetName: string;
  Target: number;
  theme: string;
};

const BudgetPage = () => {
  const [budgetsData, setBudgetsData] = useState<budgetsT[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [potID, setPotID] = useState<string>('');
  const [form, setForm] = useState<FormType2>({
    budgetName: '',
    Target: 0,
    theme: '',
  });

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

  useEffect(() => {
    fetchData();
  }, []);

  const getColorByTheme = (theme: string): string => {
    const color = colorOptions.find(
      (option) => option.value.toLowerCase() === theme.toLowerCase()
    );
    return color ? color.color : '#000';
  };

  if (loading) {
    return (
      <div className='w-full h-[100dvh] flex justify-center items-center'>
        <span className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-[100dvh] flex justify-center items-center'>
        <span className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
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

  return (
    <div className='w-full overflow-x-hidden overflow-scroll h-screen py-[40px]  px-[40px] bg-[#F8F4F0] max-sm:px-[16px] max-sm:py-[24px]'>
      <div className='w-full mb-[32px] flex justify-between'>
        <h2 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Budgets
        </h2>
        <>
          <AddNewBudget />
        </>
      </div>
      <div className='w-full flex  justify-center gap-[24px] max-md:flex-col'>
        <div className='basis-[485px] rounded-[12px] p-[30px] max-h-fit bg-white max-sm:flex-col max-md:flex'>
          <div className='max-sm:flex max-sm:justify-center '>
            <div className='relative w-full max-md:w-[400px]  justify-center flex   '>
              <BudgetChart />
              <div className='absolute top-[45px] left-1/2 transform -translate-x-1/2 w-[155px] h-[155px] rounded-full shadow-[0_0_0px_15px_rgba(225,225,225,0.5)] z-10' />
            </div>
          </div>
          <div className=' w-full  flex flex-col items-center'>
            <div className='mb-[24px]  w-full max-w-[374px]'>
              <h5 className='font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24] text-start'>
                Spending Summary
              </h5>
            </div>
            <div className=' w-full max-w-[374px]  '>
              {BudgetView.map((item) => (
                <div
                  key={item.id}
                  className='mb-[33px] w-full  flex justify-between \ '
                >
                  <div className='flex items-center'>
                    <div
                      className='w-[4px] h-[21px] rounded-[8px] mr-[16px] '
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
                    <p className='font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                      {item.BudgetCategory}
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <span className='font-publicSans font-bold text-[16px] leading-[24px] text-[#201F24]'>
                      ${item.enterMoney}
                    </span>
                    <span className='ml-[8px] font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                      of ${item.limit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='basis-[608px]  grow w-full  flex flex-col justify-between '>
          {budgetsData.map((item, Index) => (
            <div
              key={item._id}
              className='w-full h-fit bg-white p-[32px] rounded-[12px] mb-[24px]'
            >
              <div className='w-full flex justify-between '>
                <div className='flex items-center mb-[20px]'>
                  <div
                    className=' w-[16px] h-[16px] mr-[16px] rounded-full'
                    style={{
                      backgroundColor: getColorByTheme(item.theme),
                    }}
                  />
                  <span className='font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]'>
                    {item.budgetName}
                  </span>
                </div>
                <>
                  <BudgetSetting
                    index={Index}
                    setPotID={setPotID}
                    itemID={item._id}
                    setError={setError}
                    setForm={setForm}
                  />
                </>
              </div>
              <div>
                <div className='flex flex-col justify-between'>
                  <span className='mb-[16px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                    Maximum of ${item.Target}
                  </span>
                  <div className='w-full h-[32px] rounded-[8px] bg-[#F8F4F0] mb-[16px] flex items-center'>
                    <div
                      style={{
                        width: `${item.procent}%`,
                        backgroundColor: getColorByTheme(item.theme),
                      }}
                      className='h-[24px] rounded-[5px]'
                    />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex  justify-start max-w-[264px] w-full '>
                      <div
                        className='w-[4px] h-full rounded-[8px] mr-[16px] '
                        style={{
                          backgroundColor: getColorByTheme(item.theme),
                        }}
                      />
                      <div className=' flex flex-col justify-between'>
                        <span className=' font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                          Spent
                        </span>
                        <span className=' font-publicSans font-bold text-[14px] leading-[21px] text-[#201F24]'>
                          {item.Spent}$
                        </span>
                      </div>
                    </div>
                    <div className='flex justify-start  max-w-[280px] w-full '>
                      <div className='w-[4px] h-full rounded-[8px] mr-[16px] bg-[#F8F4F0]' />
                      <div className='flex flex-col justify-between'>
                        <span className=' font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                          Remaining
                        </span>
                        <span className=' font-publicSans font-bold text-[14px] leading-[21px] text-[#201F24]'>
                          {item.Remaining}$
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-[12px] mt-[20px] p-[20px] bg-[#F8F4F0]'>
                <div className='mb-[20px] flex justify-between'>
                  <div>
                    <p className=' font-publicSans font-bold text-[16px] leading-[24px] text-[#201F24]'>
                      Latest Spending
                    </p>
                  </div>
                  <div>
                    <Link href='/Transactions' className='flex items-center'>
                      <span className='mr-[12px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868] '>
                        see all
                      </span>
                      <Image src={arrowR} width={12} height={12} alt='arrow' />
                    </Link>
                  </div>
                </div>
                {item.transactions.slice(-3).map((translation, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-[12px] ${
                      index === item.transactions.length - 1
                        ? ' items-end'
                        : 'border-b-[1px] border-opacity-[15%] border-[#696868]  '
                    }`}
                  >
                    <div className='flex items-center'>
                      <div>
                        {/* <Image
                          src={translation.userImg}
                          width={32}
                          height={32}
                          alt='userImg'
                        /> */}
                      </div>
                      <span className='ml-[16px] font-publicSans font-bold text-[12px] leading-[18px] text-[#201F24]'>
                        {translation.RecipientOrSender}
                      </span>
                    </div>
                    <div className='flex flex-col items-end'>
                      <span className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#201F24]'>
                        -${translation.Amount}
                      </span>
                      <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                        {translation.TransactionDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
        <CreateBudget fetchData={fetchData} setError={setError} />

        <EditBudget
          fetchData={fetchData}
          potID={potID}
          setError={setError}
          form={form}
          setForm={setForm}
        />

        <DeleteBudget fetchData={fetchData} potID={potID} setError={setError} />
      </>
    </div>
  );
};

export default BudgetPage;
