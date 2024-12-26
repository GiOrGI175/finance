import AddNewBudget from '../__atoms/AddNewBudget';
import { BudgetView } from '@/commons/hooks/BudgetData';
import Image from 'next/image';
import { arrowR } from '@/utility/images/ImgExport';
import Link from 'next/link';
import BudgetSetting from '../__atoms/BudgetSetting';
import CreateBudget from '../__molecules/CreateBudget';
import EditBudget from '../__molecules/EditBudget';
import DeleteBudget from '../__molecules/DeleteBudget';
import { BudgetChart } from '../__molecules/BudgetChart';

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
        <div className='basis-[428px]  grow w-full h-[600px] rounded-[12px] flex flex-col justify-between p-[32px] bg-white max-sm:p-[20px]'>
          <div className='flex flex-col justify-between items-center'>
            <div className='relative w-full flex  justify-center mb-[32px]'>
              <BudgetChart />
              <div className='absolute top-[45px] left-1/2 transform -translate-x-1/2 w-[155px] h-[155px] rounded-full shadow-[0_0_0px_15px_rgba(225,225,225,0.5)] z-10' />
            </div>
            <div className='mb-[24px] min-w-[365px] max-w-[450px] w-full'>
              <h5 className='font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24] text-start'>
                Spending Summary
              </h5>
            </div>
            <div className='min-w-[365px] max-w-[450px] w-full'>
              {BudgetView.map((item) => (
                <div
                  key={item.id}
                  className='mb-[33px] w-full  flex justify-between \ '
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
                      ${item.enterMoney}
                    </span>
                    <span className='ml-[8px] font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                      of ${item.limit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='basis-[608px]  grow w-full  flex flex-col justify-between '>
          {BudgetView.map((item, Index) => (
            <div
              key={item.id}
              className='w-full h-fit bg-white p-[32px] rounded-[12px] mb-[24px]'
            >
              <div className='w-full flex justify-between '>
                <div className='flex items-center mb-[20px]'>
                  <div
                    className=' w-[16px] h-[16px] mr-[16px] rounded-full'
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <span className='font-publicSans font-bold text-[20px] leading-[24px] text-[#201F24]'>
                    {item.BudgetCategory}
                  </span>
                </div>
                <>
                  <BudgetSetting index={Index} />
                </>
              </div>
              <div>
                <div className='flex flex-col justify-between'>
                  <span className='mb-[16px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                    Maximum of ${item.limit}
                  </span>
                  <div className='w-full h-[32px] rounded-[8px] bg-[#F8F4F0] mb-[16px] flex items-center'>
                    <div
                      style={{
                        width: `${item.procent}%`,
                        backgroundColor: item.color,
                      }}
                      className='h-[24px] rounded-[5px]'
                    />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex  justify-start max-w-[264px] w-full '>
                      <div
                        className='w-[4px] h-full rounded-[8px] mr-[16px] '
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                      <div className=' flex flex-col justify-between'>
                        <span className=' font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                          Spent
                        </span>
                        <span className=' font-publicSans font-bold text-[14px] leading-[21px] text-[#201F24]'>
                          {item.enterMoney}$
                        </span>
                      </div>
                    </div>
                    <div className='flex justify-start  max-w-[280px] w-full '>
                      <div className='w-[4px] h-full rounded-[8px] mr-[16px] bg-[#F8F4F0]' />
                      <div className='flex flex-col justify-between'>
                        <span className=' font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
                          Remaining
                        </span>
                        <span className=' font-publicSans font-bold text-[14px] leading-[21px] text-[#201F24]'>
                          35$
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-[12px] mt-[20px] p-[20px] bg-[#F8F4F0]'>
                <div className='mb-[20px] flex justify-between'>
                  <div>
                    <p className=' font-publicSans font-bold text-[16px] leading-[24px] text-[#201F24]'>
                      Latest Spending
                    </p>
                  </div>
                  <div>
                    <Link href='/Transactions' className='flex items-center'>
                      <span className='mr-[12px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868] '>
                        see all
                      </span>
                      <Image src={arrowR} width={12} height={12} alt='arrow' />
                    </Link>
                  </div>
                </div>
                {item.translations.map((translation, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-[12px] ${
                      index === item.translations.length - 1
                        ? ' items-end'
                        : 'border-b-[1px] border-opacity-[15%] border-[#696868]  '
                    }`}
                  >
                    <div className='flex items-center'>
                      <div>
                        <Image
                          src={translation.userImg}
                          width={32}
                          height={32}
                          alt='userImg'
                        />
                      </div>
                      <span className='ml-[16px] font-publicSans font-bold text-[12px] leading-[18px] text-[#201F24]'>
                        {translation.userName}
                      </span>
                    </div>
                    <div className='flex flex-col items-end'>
                      <span className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#201F24]'>
                        -${translation.translation}
                      </span>
                      <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                        {translation.data}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
        <CreateBudget />

        <EditBudget />

        <DeleteBudget />
      </>
    </div>
  );
};

export default BudgetPage;
