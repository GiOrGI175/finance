'use client';

import { Potss } from '@/commons/hooks/PotsData';
import Image from 'next/image';
import { paramsIcon } from '@/utility/images/ImgExport';

const PotsPage = () => {
  return (
    <div className='w-full overflow-x-hidden overflow-scroll h-screen p-[40px] bg-[#F8F4F0] '>
      <div className='w-full mb-[32px] flex justify-between'>
        <h2 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Pots
        </h2>
        <button className='w-[128px] h-[53px] rounded-[8px] padding-[16px] bg-[#201F24]'>
          <span className='font-publicSans font-bold text-[14px] leading-[21px] text-white'>
            + Add New Pot
          </span>
        </button>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-[24px]'>
        {Potss.map((item) => (
          <div
            key={item.id}
            className='basis-[518px]  grow w-full h-[303px] rounded-[12px] flex flex-col justify-between p-[24px] bg-white'
          >
            <div className='flex justify-between mb-[32px]'>
              <div className='flex'>
                <Image src={item.icon} width={16} height={16} alt='icon' />
                <span className='ml-[16px] font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]'>
                  {item.method}
                </span>
              </div>
              <button>
                <Image src={paramsIcon} width={16} height={16} alt='icon' />
              </button>
            </div>
            <div className='flex flex-col justify-between mb-[32px]'>
              <div className='flex justify-between items-center mb-[16px]'>
                <div>
                  <span className='font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                    Total Saved
                  </span>
                </div>
                <div>
                  <span className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
                    ${item.sum}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='w-full h-[8px] rounded-[8px] bg-[#F8F4F0] '>
                  <div
                    style={{
                      width: `${item.procent}%`,
                      backgroundColor: item.color,
                    }}
                    className='h-full rounded-[8px]'
                  />
                </div>
                <div className='flex justify-between mt-[13px]'>
                  <div>
                    <span className='font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
                      {item.procent}%
                    </span>
                  </div>
                  <div>
                    <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                      Target pf ${item.limit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-[16px]'>
              <button className='min-w-[227px] w-full h-[53px] rounded-[8px] bg-[#F8F4F0]'>
                + Add Money
              </button>
              <button className='min-w-[227px] w-full h-[53px] rounded-[8px] bg-[#F8F4F0]'>
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
