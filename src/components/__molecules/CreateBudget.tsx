'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import ChoseInput from '../__atoms/ChoseInput';
import AddPot from '../__atoms/AddPot';
import { CloseBtn } from '@/utility/images/ImgExport';
import AddBudget from '../__atoms/AddBudget';

const CreateBudget = () => {
  const showAddBudget = useAppBtn((state) => state.showAddBudget);
  const toggleshowAddBudget = useAppBtn((state) => state.toggleshowAddBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[542px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showAddBudget ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }    max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]  max-ss:text-[20px]   '>
            Add New Budget
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleshowAddBudget();
            }}
          >
            <Image src={CloseBtn} width={32} height={32} alt='delete' />
          </button>
        </div>
        <p className='mb-[20px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
      </div>
      <div>
        <form className=''>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Pot Name
            </label>
            <input
              type='text'
              className='w-full h-[45px]  px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
            />
            <span className='mt-[4px] text-end font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
              30 characters left
            </span>
          </div>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Target
            </label>
            <input
              type='text'
              placeholder='$'
              className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
            />
          </div>
          <>{/* <ChoseInput /> */}</>
        </form>
      </div>
      <>
        <AddBudget />
      </>
    </div>
  );
};

export default CreateBudget;
