'use client';

import useAppBtn from '@/commons/hooks/setTrue';

const SaveChange = () => {
  const toggleEditPot = useAppBtn((state) => state.toggleEditPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <button
      className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
      onClick={() => {
        toggleOverlay();
        toggleEditPot();
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Save Change
      </span>
    </button>
  );
};

export default SaveChange;
