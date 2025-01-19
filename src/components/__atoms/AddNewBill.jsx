import React, { useState } from "react";
import BillPopUp from "../__molecules/BillPopUp";

export default function AddNewBill({ handleClickShow }) {
  return (
    <>
      <button
        onClick={(e) => {
          handleClickShow(e);
        }}
        className="p-4 bg-gray-900 text-white font-bold rounded-[8px]"
      >
        + Add new Bill
      </button>
    </>
  );
}
