'use client';

import useAppBtn from '@/commons/hooks/setTrue';

const AddPot = () => {
  const toggleAddPot = useAppBtn((state) => state.toggleAddPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <button
      className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
      onClick={() => {
        toggleOverlay();
        toggleAddPot();
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Add Pot
      </span>
    </button>
  );
};

export default AddPot;
