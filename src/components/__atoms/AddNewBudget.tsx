"use client";

import useAppBtn from "@/commons/hooks/setTrue";

useAppBtn;

const AddNewBudget = () => {
  const toggleshowAddBudget = useAppBtn((state) => state.toggleshowAddBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <div>
      <button
        className=" w-[156px] h-[53px] rounded-[8px] padding-[16px] bg-[#201F24] max-sm:w-[154px]"
        onClick={() => {
          toggleOverlay();
          toggleshowAddBudget();
        }}
      >
        <span className="font-publicSans font-bold text-[14px] leading-[21px] text-white">
          + Add New Budget
        </span>
      </button>
    </div>
  );
};

export default AddNewBudget;
