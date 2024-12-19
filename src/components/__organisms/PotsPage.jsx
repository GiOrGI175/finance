'use client';

const PotsPage = () => {
  return (
    <div className='w-full overflow-x-hidden overflow-scroll h-screen p-[40px] bg-[#F8F4F0] '>
      <div className='w-full flex justify-between'>
        <h2 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Pots
        </h2>
        <button className='w-[128px] h-[53px] rounded-[8px] padding-[16px] bg-[#201F24]'>
          <span className='font-publicSans font-bold text-[14px] leading-[21px] text-white'>
            + Add New Pot
          </span>
        </button>
      </div>
    </div>
  );
};

export default PotsPage;
