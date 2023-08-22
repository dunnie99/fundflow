import Image from 'next/image'
import React from 'react'
import { hero } from "../assets";
import RowProducts from "./RowProducts"

const HeroSection = () => {
  return (
    <div className='hero_bg py-10 sm:py-16 px-6 sm:px-16'>
      <div className="flex items-start justify-between flex-col md:flex-row">
        <div className="sm:w-[60%] w-full">
          <h3 className="leading-normal text-center sm:text-start block font-normal tracing-[-0.128px] text-[#CDCFDE] sm:text-[64px] text-[48px]">
            Unlocking <span className='fin_bg'>Financial Inclusion</span> <span>with</span> <span className="base_bg">Base</span>
          </h3>
          <span className="text-base sm:text-2xl sm:text-start text-center mt-5 sm:mt-10 text-[#CDCFDE] tracking-[0.08px] max-w-[640px] block">
            Welcome to a new era of financial inclusion powered by Coinbase. Say goodbye to traditional barriers and hello to a borderless, secure, and empowering financial experience.
          </span>
        </div>
        <div className="sm:w-[35%] w-full sm:mt-0 my-10 flex justify-end">
          <Image
            src={hero}
            alt="hero_img"
            className=""
          />
        </div>
      </div>

      <RowProducts />
    </div>
  )
}

export default HeroSection