'use clent';

import useAppBtn from '@/commons/hooks/setTrue';

type MoneyTransferBtnPropsType = {
  setPotID: (id: string) => void;
  itemID: string;
};

const MoneyTransferBtn: React.FC<MoneyTransferBtnPropsType> = ({
  setPotID,
  itemID,
}) => {
  const toggleshowWithdrawPot = useAppBtn(
    (state) => state.toggleshowWithdrawPot
  );

  const toggleshowAddMoneyPot = useAppBtn(
    (state) => state.toggleshowAddMoneyPot
  );

  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);
  return (
    <div className='flex justify-between gap-[16px]'>
      <button
        className='min-w-[227px] w-full h-[53px] rounded-[8px] bg-[#F8F4F0] max-sm:min-w-[100px]'
        onClick={() => {
          toggleOverlay();
          toggleshowAddMoneyPot();
          setPotID(itemID);
        }}
      >
        + Add Money
      </button>
      <button
        className='min-w-[227px] w-full h-[53px] rounded-[8px] bg-[#F8F4F0] max-sm:min-w-[100px]'
        onClick={() => {
          toggleOverlay();
          toggleshowWithdrawPot();
          setPotID(itemID);
        }}
      >
        Withdraw
      </button>
    </div>
  );
};

export default MoneyTransferBtn;
