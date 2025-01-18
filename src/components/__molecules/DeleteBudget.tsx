'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import { CloseBtn } from '@/utility/images/ImgExport';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type DeleteBudgetProps = {
  fetchData: () => void;
  potID: string;
  setError: (message: string) => void;
};

const DeleteBudget: React.FC<DeleteBudgetProps> = ({
  fetchData,
  potID,
  setError,
}) => {
  const showDeleteBudget = useAppBtn((state) => state.showDeleteBudget);
  const toggleDeleteBudget = useAppBtn((state) => state.toggleDeleteBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const handleDeleteBudget = async () => {
    try {
      await axiosInstance.delete(`/budgets/${potID}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      fetchData();
    }
  };

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[290px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showDeleteBudget ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }   max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]  max-ss:text-[20px]  '>
            Delete Savings?
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleDeleteBudget();
            }}
          >
            <Image src={CloseBtn} width={32} height={32} alt='delete' />
          </button>
        </div>
        <p className='mb-[20px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
          Are you sure you want to delete this pot? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
      </div>
      <button
        className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#C94736]'
        onClick={() => {
          toggleOverlay();
          toggleDeleteBudget();
          handleDeleteBudget();
        }}
      >
        <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
          Yes, Confirm Deletion
        </span>
      </button>
      <button
        className='mt-[20px] w-full h-[21px] rounded-[8px]'
        onClick={() => {
          toggleOverlay();
          toggleDeleteBudget();
        }}
      >
        <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#696868]'>
          No, Go Back
        </span>
      </button>
    </div>
  );
};

export default DeleteBudget;
