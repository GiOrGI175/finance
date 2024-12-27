"use client";
import { BounceLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BounceLoader color="#d0be8a" />
    </div>
  );
}