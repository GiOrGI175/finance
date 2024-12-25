import AddNewBudget from '../__atoms/AddNewBudget';
import { BudgetView } from '@/commons/hooks/BudgetData';
import { transactions } from '@/utility/images/ImgExport';
import Image from 'next/image';

const BudgetPage = () => {
  return (
    <div className='w-full overflow-x-hidden overflow-scroll h-screen py-[40px]  px-[40px] bg-[#F8F4F0] max-sm:px-[16px] max-sm:py-[24px]'>
      <div className='w-full mb-[32px] flex justify-between'>
        <h2 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]'>
          Budgets
        </h2>
        <>
          <AddNewBudget />
        </>
      </div>
      <div className='w-full flex  justify-center gap-[24px]'>
        <div className='basis-[428px]  grow w-full h-[303px] rounded-[12px] flex flex-col justify-between p-[32px] bg-white max-sm:p-[20px]'>
          <div>
            <div className='mb-[24px]'>
              <h5 className='font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]'>
                Spending Summary
              </h5>
            </div>
            {BudgetView.map((item) => (
              <div
                key={item.id}
                className='mb-[33px] w-full  flex justify-between '
              >
                <div className='flex items-center'>
                  <div
                    className='w-[4px] h-[21px] rounded-[8px] mr-[16px] '
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <p className='font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                    {item.BudgetCategory}
                  </p>
                </div>
                <div className='flex items-center'>
                  <span className='font-publicSans font-bold text-[16px] leading-[24px] text-[#201F24]'>
                    ${item.budget}
                  </span>
                  <span className='ml-[8px] font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                    of ${item.limit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='basis-[608px]  grow w-full rounded-[12px] flex flex-col justify-between '>
          {BudgetView.map((item) => (
            <div
              key={item.id}
              className='w-full bg-white p-[32px] rounded-none-[12px] mb-[24px]'
            >
              <div className='w-full flex justify-between '>
                <div className='flex items-center'>
                  <div
                    className=' w-[16px] h-[16px] mr-[16px] rounded-full'
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <span>{item.BudgetCategory}</span>
                </div>
                <div>settings icon</div>
              </div>
              <div>
                <div className='flex flex-col justify-between'>
                  <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                    Target pf ${item.limit}
                  </span>
                  <div className='w-full h-[8px] rounded-[8px] bg-[#F8F4F0] '>
                    <div
                      style={{
                        width: `${item.procent}%`,
                        backgroundColor: item.color,
                      }}
                      className='h-full rounded-[8px]'
                    />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex flex-col'>
                      <span>Spent</span>
                      <span>{item.budget}$</span>
                    </div>
                    <div className='flex flex-col'>
                      <span>Remaining</span>
                      <span>35$</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p>Latest Spending</p>
                  </div>
                  <div>
                    <span>see all</span>
                    <img src='' alt='' />
                  </div>
                </div>
                {item.translations.map((translation, index) => (
                  <div key={index}>
                    <div>
                      <div>
                        <Image
                          src={translation.userImg}
                          width={32}
                          height={32}
                          alt='userImg'
                        />
                      </div>
                      <span>{translation.userName}</span>
                    </div>
                    <div>
                      <span>-${translation.translation}</span>
                      <span>{translation.data}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
