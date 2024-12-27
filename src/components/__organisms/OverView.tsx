import React from "react";
import OverViewBalances from "../__molecules/OverViewBalances";
import PotsAndTransaction from "../__molecules/PotsAndTransaction";
import BudgetAndBills from "../__molecules/BudgetAndBills";

export default function OverView() {
  return (
    <>
      <OverViewBalances />
      <div className=" flex md:flex-col lg:flex-row gap-6">
        <PotsAndTransaction />
        <BudgetAndBills />
      </div>
    </>
  );
}
