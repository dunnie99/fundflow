import Image from 'next/image'
import React from 'react'
import { hero } from "../assets";
const HeroSection = () => {
  return (
    <div className='hero_bg pt-10 sm:pt-24 px-6 sm:px-12'>
      <div className="flex items-start justify-between flex-col md:flex-row">
        <div className="w-[60%]">
          <h3 className="leading-normal text-center sm:text-start block font-normal tracing-[-0.128px] text-[#CDCFDE] text-5xl sm:text-[64px]">
            Unlocking <span className='fin_bg'>Financial Inclusion</span> <span>with</span> <span className="base_bg">Base</span>
          </h3>
          <span className="text-2xl sm:text-base text-start mt-10 text-[#CDCFDE] tracking-[0.08px] max-w-[640px] block">
            Welcome to a new era of financial inclusion powered by Coinbase. Say goodbye to traditional barriers and hello to a borderless, secure, and empowering financial experience.
          </span>
        </div>
        <div className="w-[35%]">
          <Image
            src={hero}
            alt="hero_img"
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection