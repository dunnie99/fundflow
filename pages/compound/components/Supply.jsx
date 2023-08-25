/** @format */

import Image from "next/image";
import SingleSupply from "./SingleSupply";
import SupplyWithdraw from "./SupplyWithdraw";
import { useState } from "react";
import { arrow } from "../../../assets";
import DepositAsset from "./DepositAsset";

const Supply = () => {
  const [open, setOpen] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  return (
    <div className="w-[90%] mx-auto h-[500px] bg-[#2F3677] mt-[20px] rounded-[36px] ">
      <div className="w-[90%] mx-auto pt-[20px]">
        <div className="flex justify-end pt-2 border-b-[1px] pb-2 gap-4 bordder-[#9B9B9B]">
          <button
            onClick={() => {
              setOpen(false);
              setOpenDeposit(!openDeposit);
            }}
            className="w-[128px] flex gap-2 justify-center items-center border-[#9B9B9B] text-[#9B9B9B] h-[40px] border-[1px] rounded-[36px] z-[1]"
          >
            Deposit
            <Image src={arrow} alt="supply arrow" width={20} height={20} />
          </button>
          <button
            onClick={() => {
              setOpen(!open);
              setOpenDeposit(false);
            }}
            className="w-[128px] flex gap-2 justify-center items-center border-[#9B9B9B] text-[#9B9B9B] h-[40px] border-[1px] rounded-[36px] z-[1]"
          >
            Supply
            <Image src={arrow} alt="supply arrow" width={20} height={20} />
          </button>
        </div>
        <section className="relative w-[90%] mx-auto">
          <div className="text-[20px] grid grid-cols-4  justify-between font-normal mono text-[#CDCFDE] leading-6 mt-6 mb-4  ">
            <h2 className="">Asset</h2>
            <h2 className="text-center">Address</h2>
            <h2 className="text-center">Pool APY</h2>
            <h2 className="text-right">P2P APY</h2>
          </div>
          <div className="h-[340px] overflow-y-scroll scrollbar-hide  pb-[40px]">
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
            <SingleSupply />
          </div>
        </section>
      </div>
      {open && <SupplyWithdraw />}
      {openDeposit && <DepositAsset />}
    </div>
  );
};

export default Supply;

// className="w-[1186px] mx-auto border-b-[3px] border-b-[#8287AE] pt-[80px] h-[60px]"
