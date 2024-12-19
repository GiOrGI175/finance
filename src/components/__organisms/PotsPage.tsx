'use client';

import { Potss } from '@/commons/hooks/PotsData';
import Image from 'next/image';
import { paramsIcon } from '@/utility/images/ImgExport';

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
      <div className='w-full flex flex-wrap justify-between border-[1px] border-[black]'>
        {Potss.map((item) => (
          <div
            key={item.id}
            className='max-w-[518px] w-full h-[303px] flex flex-col justify-between p-[24px] bg-white'
          >
            <div className='flex justify-between mb-[32px]'>
              <div>
                <Image src={item.icon} width={16} height={16} alt='icon' />
                <span>{item.method}</span>
              </div>
              <div>
                <Image src={paramsIcon} width={16} height={16} alt='icon' />
              </div>
            </div>
            <div className='flex flex-col justify-between mb-[32px]'>
              <div className='flex justify-between mb-[16px]'>
                <div>
                  <span>Total Saved</span>
                </div>
                <div>
                  <span>${item.sum}</span>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div>
                  <div />
                </div>
                <div className='flex justify-between mt-[13px]'>
                  <div>
                    <span>{item.procent}%</span>
                  </div>
                  <div>
                    <span>Target pf ${item.limit}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <button>+ Add Money</button>
              <button>Withdraw</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
