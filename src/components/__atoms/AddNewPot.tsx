'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import {motion} from "framer-motion"

useAppBtn;

const AddNewPot = () => {
  const toggleAddPot = useAppBtn((state) => state.toggleAddPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{
          once: true,
        }}>
      <button
        className=' w-[128px] h-[53px] rounded-[8px] padding-[16px] bg-[#201F24] max-sm:w-[154px]'
        onClick={() => {
          toggleOverlay();
          toggleAddPot();
        }}
      >
        <span className='font-publicSans font-bold text-[14px] leading-[21px] text-white'>
          + Add New Pot
        </span>
      </button>
    </motion.div>
  );
};

export default AddNewPot;
