'use client';

import { paramsIcon } from '@/utility/images/ImgExport';
import Image from 'next/image';
import { useState } from 'react';
import useAppBtn from '@/commons/hooks/setTrue';

type PotSettingsPropsType = {
  index: number;
  setPotID: (id: string) => void;
  itemID: string;
};

const PotSettings: React.FC<PotSettingsPropsType> = ({
  index,
  setPotID,
  itemID,
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

  return (
    <div className='relative '>
      <button onClick={() => toggleSettings(index)}>
        <Image src={paramsIcon} width={16} height={16} alt='icon' />
      </button>
      {isSettingsVisible && (
        <div className='absolute w-[114px]  bg-white right-[0px] shadow-lg flex flex-col items-center '>
          <button
            className=' py-[12px]  border-b-[1px] border-[#F2F2F2] w-[74px] flex justify-self-start'
            onClick={() => {
              toggleOverlay();
              toggleEditPot();
              setPotID(itemID);
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
