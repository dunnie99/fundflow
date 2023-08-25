/** @format */


import Image from "next/image";
import SingleBorrow from "./SingleBorrow";
import { useState } from "react";
import BorrowWithdraw from "./BorrowWithdraw";
import { arrow } from "../../../assets";

const Borrow = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="">
      <div className="w-[90%] mx-auto h-[500px]  bg-[#2F3677] mt-[20px] rounded-[36px]">
        <div className="w-[90%] mx-auto pt-[20px]">
          <div className="flex justify-end pt-2 border-b-[1px] pb-2 bordder-[#9B9B9B]">
            <button
              onClick={() => setOpen(!open)}
              className="w-[128px] flex gap-2 justify-center items-center border-[#9B9B9B] text-[#9B9B9B] h-[40px] border-[1px] z-[1] rounded-[36px]"
            >
              Borrow
              {/* <img src="/../arrow.svg" alt="" className="w-[24px] h-[24px]"/> */}
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
          <section className="relative w-[90%] mx-auto">
            <div className="text-[20px] grid grid-cols-4  justify-between font-normal mono text-[#CDCFDE] leading-6 mt-6 mb-4">
              <h2 className="">Asset</h2>
              <h2 className="text-center">Address</h2>
              <h2 className="text-center">Pool APY</h2>
              <h2 className="text-right">P2P APY</h2>
            </div>
            <div className="h-[340px] overflow-y-scroll scrollbar-hide  pb-[40px]">
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            <SingleBorrow />
            </div>
          </section>
        </div>
        {open && <BorrowWithdraw />}
      </div>
    </main>
  );
};

export default Borrow;
