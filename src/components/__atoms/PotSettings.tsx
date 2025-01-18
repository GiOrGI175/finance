'use client';

import { paramsIcon } from '@/utility/images/ImgExport';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useAppBtn from '@/commons/hooks/setTrue';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type PotSettingsPropsType = {
  index: number;
  setPotID: (id: string) => void;
  itemID: string;
  setError: (message: string) => void;
  setForm: React.Dispatch<React.SetStateAction<any>>;
  setChoseInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const PotSettings: React.FC<PotSettingsPropsType> = ({
  index,
  setPotID,
  itemID,
  setError,
  setForm,
  setChoseInput,
}) => {
  const toggleEditPot = useAppBtn((state) => state.toggleEditPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);
  const toggleDeletePot = useAppBtn((state) => state.toggleDeletePot);

  const [openSettingsIndex, setOpenSettingsIndex] = useState<number | null>(
    null
  );

  const toggleSettings = (index: number) => {
    setOpenSettingsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isSettingsVisible = openSettingsIndex === index;

  const handleSettFormData = async (potID: string) => {
    try {
      const res = await axiosInstance.get(`/pots/${potID}`);
      const potData = res.data;
      setForm({
        potName: potData.potName || '',
        Target: potData.Target || 0,
        theme: potData.theme || '',
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
        <div className='absolute w-[114px]  bg-white right-[0px] shadow-lg flex flex-col items-center '>
          <button
            className=' py-[12px]  border-b-[1px] border-[#F2F2F2] w-[74px] flex justify-self-start'
            onClick={async () => {
              await handleSettFormData(itemID);
              toggleOverlay();
              toggleEditPot();
              setPotID(itemID);
              setChoseInput(true);
            }}
          >
            <span className='font-publicSans font-normal text-[14px] leading-[24px] text-[#201F24] w-full text-start  '>
              Edit Pot
            </span>
          </button>
          <button
            className=' py-[12px] w-[74px] flex justify-self-start'
            onClick={() => {
              toggleOverlay();
              toggleDeletePot();
              setPotID(itemID);
            }}
          >
            <span className='font-publicSans font-normal text-[14px] leading-[24px] text-[#C94736] w-full text-start  '>
              Delete Pot
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PotSettings;
