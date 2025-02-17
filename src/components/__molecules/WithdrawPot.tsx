'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import ChoseInput from '../__atoms/ChoseInput';
import { CloseBtn } from '@/utility/images/ImgExport';
import SaveChange from '../__atoms/SaveChange';
import { useEffect, useState } from 'react';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type WithdrawPotPropsType = {
  potID: string;
  setError: (message: string) => void;
  fetchData: () => void;
};

const WithdrawPot: React.FC<WithdrawPotPropsType> = ({
  potID,
  fetchData,
  setError,
}) => {
  const showWithdraw = useAppBtn((state) => state.showWithdraw);
  const toggleshowWithdrawPot = useAppBtn(
    (state) => state.toggleshowWithdrawPot
  );
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const [WithdrawMoney, setWithdrawMoney] = useState({ Withdraw: 0 });

  const handleWithdraw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawMoney({ Withdraw: Number(e.target.value) });
  };

  const [data, setData] = useState({ procent: '', theme: '', Target: 0 });

  useEffect(() => {
    const getPotData = async () => {
      try {
        const res = await axiosInstance.get(`/pots/${potID}`);

        const getdata = res.data;
        setData({
          procent: getdata.procent,
          theme: getdata.theme,
          Target: getdata.Target,
        });
      } catch (error: any) {
        setError(error.message);
      }
    };
    getPotData();
  }, [potID]);

  const handleConfrim = async (potID: string) => {
    try {
      await axiosInstance.post(`/pots/${potID}/withdraw`, WithdrawMoney);

      fetchData();

      setWithdrawMoney({ Withdraw: Number(0) });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[480px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showWithdraw ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }  max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24] max-ss:text-[20px]'>
            Withdraw from ‘Savings’
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleshowWithdrawPot();
            }}
          >
            <Image src={CloseBtn} width={32} height={32} alt='delete' />
          </button>
        </div>
        <p className='mb-[20px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868] '>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
        </p>
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
              sum
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          {/*  */}
          <div className='w-full h-[8px] rounded-[8px] bg-[#F8F4F0] '>
            <div
              style={{
                width: `${data.procent}%`,
                backgroundColor: `${data.theme}`,
              }}
              className='h-full rounded-[8px]'
            />
          </div>
          {/*  */}
          <div className='flex justify-between mt-[13px]'>
            <div>
              <span className='font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
                {data.procent}%
              </span>
            </div>
            <div>
              <span className='font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
                Target of ${data.Target} limit
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col mb-[16px]'>
        <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
          Amount to Withdraw
        </label>
        <input
          type='number'
          placeholder='$'
          className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
          value={WithdrawMoney.Withdraw}
          onChange={handleWithdraw}
        />
      </div>

      <button
        className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
        onClick={() => {
          toggleOverlay();
          toggleshowWithdrawPot();
          handleConfrim(potID);
        }}
      >
        <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
          Confirm Withdrawal
        </span>
      </button>
    </div>
  );
};

export default WithdrawPot;
