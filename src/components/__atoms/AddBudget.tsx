'use client';

import useAppBtn from '@/commons/hooks/setTrue';

const AddBudget = () => {
  const toggleshowAddBudget = useAppBtn((state) => state.toggleshowAddBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <button
      className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
      onClick={() => {
        toggleOverlay();
        toggleshowAddBudget();
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Add Budget
      </span>
    </button>
  );
};

export default AddBudget;
