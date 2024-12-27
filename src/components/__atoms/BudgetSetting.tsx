'use client';

import { paramsIcon } from '@/utility/images/ImgExport';
import Image from 'next/image';
import { useState } from 'react';
import useAppBtn from '@/commons/hooks/setTrue';

type PotSettingsPropsType = {
  index: number;
};

const BudgetSetting: React.FC<PotSettingsPropsType> = ({ index }) => {
  const toggleshowEditBudget = useAppBtn((state) => state.toggleshowEditBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);
  const toggleDeleteBudget = useAppBtn((state) => state.toggleDeleteBudget);

  const [openSettingsIndex, setOpenSettingsIndex] = useState<number | null>(
    null
  );

  const toggleSettings = (index: number) => {
    setOpenSettingsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isSettingsVisible = openSettingsIndex === index;

  return (
    <div className='relative '>
      <button onClick={() => toggleSettings(index)}>
        <Image src={paramsIcon} width={16} height={16} alt='icon' />
      </button>
      {isSettingsVisible && (
        <div className='absolute w-[134px]  bg-white right-[0px] shadow-lg flex flex-col items-center '>
          <button
            className=' py-[12px]  border-b-[1px] border-[#F2F2F2] w-[104px] flex justify-self-start'
            onClick={() => {
              toggleOverlay();
              toggleshowEditBudget();
            }}
          >
            <span className='font-publicSans font-normal text-[14px] leading-[24px] text-[#201F24] w-full text-start  '>
              Edit Budget
            </span>
          </button>
          <button
            className=' py-[12px] w-[104px] flex justify-self-start'
            onClick={() => {
              toggleOverlay();
              toggleDeleteBudget();
            }}
          >
            <span className='font-publicSans font-normal text-[14px] leading-[24px] text-[#C94736] w-full text-start  '>
              Delete Budget
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default BudgetSetting;
