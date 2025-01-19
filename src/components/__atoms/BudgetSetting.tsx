'use client';

import { paramsIcon } from '@/utility/images/ImgExport';
import Image from 'next/image';
import { useState } from 'react';
import useAppBtn from '@/commons/hooks/setTrue';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type PotSettingsPropsType = {
  index: number;
  setPotID: (id: string) => void;
  itemID: string;
  setError: (message: string) => void;
  setForm: React.Dispatch<React.SetStateAction<any>>;
};

const BudgetSetting: React.FC<PotSettingsPropsType> = ({
  index,
  setPotID,
  itemID,
  setError,
  setForm,
}) => {
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

  const handleSettFormData = async (potID: string) => {
    try {
      const res = await axiosInstance.get(`/budgets/${potID}`);
      const budgetsData = res.data;
      setForm({
        budgetName: budgetsData.budgetName || '',
        Target: budgetsData.Target || 0,
        theme: budgetsData.theme || '',
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className='relative '>
      <button onClick={() => toggleSettings(index)}>
        <Image src={paramsIcon} width={16} height={16} alt='icon' />
      </button>
      {isSettingsVisible && (
        <div className='absolute w-[134px]  bg-white right-[0px] shadow-lg flex flex-col items-center '>
          <button
            className=' py-[12px]  border-b-[1px] border-[#F2F2F2] w-[104px] flex justify-self-start'
            onClick={async () => {
              await handleSettFormData(itemID);
              toggleOverlay();
              toggleshowEditBudget();
              setPotID(itemID);
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
              setPotID(itemID);
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
