'use client';

import useAppBtn from '@/commons/hooks/setTrue';

useAppBtn;

const AddNewPot = () => {
  const toggleAddPot = useAppBtn((state) => state.toggleAddPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <div>
      <button
        className=' w-[128px] h-[53px] rounded-[8px] padding-[16px] bg-[#201F24]'
        onClick={() => {
          toggleOverlay();
          toggleAddPot();
        }}
      >
        <span className='font-publicSans font-bold text-[14px] leading-[21px] text-white'>
          + Add New Pot
        </span>
      </button>
    </div>
  );
};

export default AddNewPot;
