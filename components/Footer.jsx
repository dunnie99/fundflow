import React from "react";
import Social from "./Social";
import { ic_baseline_discord, mdi_github, twitter } from "../assets";

const Footer = () => {
  return (
    <div className="py-8 px-6 sm:px-16 bg-[#02051F]">
      <div>
        <h2 className="text-[#F5F6FF] text-3xl uppercase geostar_font">Fundflow</h2>
        <div className="sm:flex justify-between items-start text-[#C5CBFD] w-full ">
          <div className="w-full sm:w-[50%] py-10">
            <span className="grotesk block max-w-[350px]">Welcome to a new era of financial inclusion powered by Ethereum</span>
            <div className="sm:flex sm:space-x-4 items-center space-y-3 sm:space-y-0 mt-10">
              <Social name="Github" icon={mdi_github} />
              <Social name="Discord" icon={ic_baseline_discord} />
              <Social name="Twitter" icon={twitter} />
            </div>
          </div>

          <div className="flex space-x-12 py-10">
            <div className="block">
              <ul className="ont-normal text-xs tracking-[0.12px]">
                <li className="side text-base font-bold tracking-[1.4px] mb-5">Developers</li>
                <li className="pb-3">Documentation</li>
                <li className="">Github</li>
              </ul>
            </div>
            <div className="grid">
              <ul className="font-normal text-xs tracking-[0.12px]">
                <li className="side text-base font-bold tracking-[1.4px] mb-5">Governance</li>
                <li className="pb-3">Forum</li>
                <li className="">Snapshot</li>
              </ul>
            </div>
            <div className="grid">
              <ul className="font-normal text-xs tracking-[0.12px]">
                <li className="side text-base font-bold tracking-[1.4px] mb-5">Applications</li>
                <li className="pb-3">Aave V2</li>
                <li className="">Base Swap</li>
                <li className="">Uniswap</li>
              </ul>
            </div>
            <div className="grid">
              <ul className="font-normal text-xs tracking-[0.12px]">
                <li className="side text-base font-bold tracking-[1.4px] mb-5">FAQs</li>
                <li className="pb-3">Account</li>
                <li className="">Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6 sm:mt-24" />
      <div className="px-6 grotesk text-xs mt-2 text-[#C5CBFD] sm:flex justify-between">
        <div className="space-x-3 block text-center sm:text-start w-full my-3">
          <span className="pb-2">Privacy Policy</span>
          <span className="pb-2">Terms of Use</span>
        </div>
        <p className=" block text-center sm:text-end w-full mt-2">&copy; 2023 <span className="pl-2"> All rights reserved</span></p>
      </div>
    </div>
  )
};

export default Footer;