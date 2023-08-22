import React from 'react'
import { glasses } from "../utils/constants"
import { ethereum } from "../assets";
import Image from 'next/image';

const RowProducts = () => {
  return (
    <div className="flex scrollbar-hide overflow-x-scroll overflow-y-hidden gap-8 flex-nowrap items-end justify-between my-8 text-[#fefefe] sm:my-10">
      {glasses?.map((card, index) => (
        <div key={index} className="class flex items-center w-full gap-2 rounded-2xl py-3 px-6 min-w-[215px] text-center flex">
          <Image
            src={ethereum}
            alt={`chain_img + ${index}`}
            className="w-6 sm:w-3 h-12 sm:h-5"
          />
          {card}
        </div>
      ))}
    </div>
  )
}

export default RowProducts